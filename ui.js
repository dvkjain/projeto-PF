// Importa a classe/módulo principal que contém as funções de manipulação dos dados
import { Medicamentos } from './lib.js';

// ===== Dados e elementos =====

// Carrega os medicamentos salvos no localStorage.
// Se não houver nada salvo, reinicia com os medicamentos padrão (resetMedicines).
let medicamentos = Medicamentos.loadMedicines()

// Garante que o estado atual seja salvo no localStorage
Medicamentos.saveMedicines(medicamentos);

// Seleciona elementos HTML que serão manipulados pelo JavaScript
const output = document.getElementById('output');   // Área de exibição de resultados
const forms = document.getElementById('forms');     // Área onde formulários aparecem dinamicamente
const buttons = document.getElementById('buttons'); // Div que contém os botões de ações

// ===== Forms =====
// Cada função abaixo cria dinamicamente um formulário e adiciona
// eventos de "submit" para executar a ação correspondente no CRUD.

// --- Formulário de adicionar medicamento ---
function showAddForm() {
  forms.innerHTML = `
    <h3>Adicionar Medicamento</h3>
    <form id="addForm">
      <input type="number" id="addId" placeholder="ID" required />
      <input type="text" id="addName" placeholder="Nome" required />
      <input type="text" id="addTarja" placeholder="Tarja" required />
      <input type="text" id="addForma" placeholder="Forma" required />
      <input type="text" id="addPublico" placeholder="Público" required />
      <button type="submit">Adicionar</button>
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('addForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const newMedicine = {
      id: Number(document.getElementById('addId').value),
      name: document.getElementById('addName').value,
      tarja: document.getElementById('addTarja').value,
      forma: document.getElementById('addForma').value,
      publico: document.getElementById('addPublico').value,
    };
    medicamentos = Medicamentos.addMedicine(medicamentos, newMedicine); // Chama a função da lib
    Medicamentos.saveMedicines(medicamentos); // Salva no localStorage
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = 'Medicamento adicionado!';
  });
}

// --- Formulário de atualizar Medicamento ---
function showUpdateForm() {
  forms.innerHTML = `
    <h3>Atualizar Medicamento</h3>
    <form id="updateForm">
      <input type="number" id="updateId" placeholder="ID" required />
      <input type="text" id="updateName" placeholder="Nome" required />
      <input type="text" id="updateTarja" placeholder="Tarja" required />
      <input type="text" id="updateForma" placeholder="Forma" required />
      <input type="text" id="updatePublico" placeholder="Público" required />
      <button type="submit">Atualizar</button>
    </form>
  `;
  document.getElementById('updateForm').addEventListener('submit', e => {
    e.preventDefault();
    const id = Number(document.getElementById('updateId').value);
    const updates = {};
    if(document.getElementById('updateName').value) updates.name = document.getElementById('updateName').value;
    if(document.getElementById('updateTarja').value) updates.tarja = document.getElementById('updateTarja').value;
    if(document.getElementById('updateForma').value) updates.forma = document.getElementById('updateForma').value;
    if(document.getElementById('updatePublico').value) updates.publico = document.getElementById('updatePublico').value;
   
    medicamentos = Medicamentos.updateMedicine(medicamentos, id, updates); // Atualiza o medicamento
    Medicamentos.saveMedicines(medicamentos);
    forms.innerHTML = '';
    output.textContent = 'Medicamento atualizado!';
  });
}

// --- Formulário de remover Medicamento ---
function showDeleteForm() {
  forms.innerHTML = `
    <h3>Remover Medicamento</h3>
    <form id="deleteForm">
      <input type="number" id="deleteId" placeholder="ID do medicamento" required />
      <button type="submit">Remover</button>
    </form>
  `;
  document.getElementById('deleteForm').addEventListener('submit', e => {
    e.preventDefault();
    const id = Number(document.getElementById('deleteId').value);
    medicamentos = Medicamentos.deleteMedicine(medicamentos, id); // Remove o medicamento
    Medicamentos.saveMedicines(medicamentos);
    forms.innerHTML = '';
    output.textContent = 'Medicamento removido!';
  });
}

// --- Formulário de listar por tarja ---
function showGroupByTarjaForm() {
  forms.innerHTML = `
    <h3>Listar Medicamentos por Tarja</h3>
    <form id="tarjaForm">
      <input type="text" id="tarjaName" placeholder="Nome da tarja" required />
      <button type="submit">Listar</button>
    </form>
  `;
  document.getElementById('tarjaForm').addEventListener('submit', e => {
    e.preventDefault();
    const tarja = document.getElementById('tarjaName').value;
    const filtered = Medicamentos.filterMedicinesFromTarja(medicamentos, tarja);
    forms.innerHTML = '';
    currentPage = 1
    renderPaginatedList(filtered);
  });
}

// --- Formulário de buscar Medicamento ---
function showSearchForm() {
  forms.innerHTML = `
    <h3>Buscar Medicamento</h3>
    <form id="searchForm">
      <input type="text" id="searchName" placeholder="Nome do medicamento" required />
      <button type="submit">Buscar</button>
    </form>
  `;
  document.getElementById('searchForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('searchName').value;
    const found = Medicamentos.searchMedicine(medicamentos, name);
    forms.innerHTML = '';
    output.textContent = found.length === 0 ? 'Nenhum medicamento encontrado.' : Medicamentos.listMedicines(found);
  });
}

// ======= Actions =======
// Dicionário que associa cada ação a uma função
// Paginação funcional usando chunkMedicines
let currentPage = 1;
const itemsPerPage = 5;

function renderPaginatedList(medParaMostrar) {
  forms.innerHTML = '';
  const paginas = Medicamentos.chunkMedicines(medParaMostrar, itemsPerPage);
  const totalPages = paginas.length > 1 ? paginas.length : 1;
  const paginaAtual = paginas[currentPage - 1] || [];
  output.innerHTML =
    (paginaAtual.length === 0 ? 'Nenhum medicamento encontrado.' : Medicamentos.listMedicines(paginaAtual)) +
    `<br>
    <button id="firstPage" ${currentPage === 1 ? 'disabled' : ''}>Primeira</button>
    <button id="prevPage" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>
    Página ${currentPage} de ${totalPages}
    <button id="nextPage" ${currentPage === totalPages ? 'disabled' : ''}>Próxima</button>
    <button id="lastPage" ${currentPage === totalPages ? 'disabled' : ''}>Última</button>
    `;

  // Eventos dos botões
  document.getElementById('firstPage').onclick = () => { currentPage = 1; renderPaginatedList(medParaMostrar); };
  document.getElementById('prevPage').onclick = () => { if(currentPage > 1) { currentPage--; renderPaginatedList(medParaMostrar); } };
  document.getElementById('nextPage').onclick = () => { if(currentPage < totalPages) { currentPage++; renderPaginatedList(medParaMostrar); } };
  document.getElementById('lastPage').onclick = () => { currentPage = totalPages; renderPaginatedList(medParaMostrar); };
}

const actions = {
  init: () => {
    medicamentos = Medicamentos.resetMedicines();
    output.textContent = "Medicamentos iniciados com lista padrão!";
    forms.innerHTML = "";
  },
  list: () => { currentPage = 1; renderPaginatedList(medicamentos); },
  add: () => showAddForm(),
  update: () => showUpdateForm(),
  delete: () => showDeleteForm(),
  clear: () => { forms.innerHTML = ''; Medicamentos.clearMedicines(); medicamentos=[]; output.textContent='Medicamentos esvaziados!'; },
  search: () => showSearchForm(),
  filterByTarja: () => showGroupByTarjaForm(),
  exit: () => { forms.innerHTML = ''; output.textContent='Bye, bye! :)'; }
};

// ===== Event listener =====
// Captura cliques nos botões do menu e chama a ação correspondente
buttons.addEventListener('click', e => {
  if(e.target.tagName === 'BUTTON') {
    const action = e.target.dataset.action; // Lê o "data-action" do botão
    if(action && actions[action]) actions[action](); // Executa a função correspondente
  }
});