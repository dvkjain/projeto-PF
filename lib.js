const STORAGE_KEY = "projeto::medicamentos"

// ========================
// Persistência
// ========================

const loadMedicines = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

const saveMedicines = medicines =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(medicines))

const clearMedicines = () => {
  localStorage.removeItem(STORAGE_KEY)
  console.log("Medicamentos limpos!")
}

const resetMedicines = () => {
  const medicines = [
  { id: 1, name: "Paracetamol", tarja: "Vermelha", forma: "Comprimido", publico: "Todas as idades" },
  { id: 2, name: "Ibuprofeno", tarja: "Vermelha", forma: "Comprimido", publico: "Todas as idades" },
  { id: 3, name: "Cetirizina", tarja: "Vermelha", forma: "Cápsula", publico: "Todas as idades" },
  { id: 4, name: "Omeprazol", tarja: "Vermelha", forma: "Cápsula", publico: "Adultos" },
  { id: 5, name: "Ácido Acetilsalicílico", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 6, name: "Dipirona", tarja: "Vermelha", forma: "Cápsula", publico: "Todas as idades" },
  { id: 7, name: "Loratadina", tarja: "Vermelha", forma: "Comprimido", publico: "Todas as idades" },
  { id: 8, name: "Pantoprazol", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 9, name: "Atorvastatina", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 10, name: "Rosuvastatina", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 11, name: "Amoxicilina", tarja: "Amarela", forma: "Cápsula", publico: "Todas as idades" },
  { id: 12, name: "Metformina", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
  { id: 13, name: "Captopril", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 14, name: "Losartana", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 15, name: "Ranitidina", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
  { id: 16, name: "Azitromicina", tarja: "Amarela", forma: "Cápsula", publico: "Todas as idades" },
  { id: 17, name: "Furosemida", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 18, name: "Salbutamol", tarja: "Amarela", forma: "Spray", publico: "Todas as idades" },
  { id: 19, name: "Prednisona", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
  { id: 20, name: "Claritromicina", tarja: "Amarela", forma: "Cápsula", publico: "Todas as idades" },
  { id: 21, name: "Naproxeno", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
  { id: 22, name: "Hidroclorotiazida", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 23, name: "Levotiroxina", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 24, name: "Glibenclamida", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 25, name: "Doxiciclina", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
  { id: 26, name: "Clortalidona", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 27, name: "Lorazepam", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 28, name: "Diazepam", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 29, name: "Clonazepam", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 30, name: "Risperidona", tarja: "Preta", forma: "Cápsula", publico: "Adultos" },
  { id: 31, name: "Metadona", tarja: "Preta", forma: "Cápsula", publico: "Adultos" },
  { id: 32, name: "Midazolam", tarja: "Preta", forma: "Cápsula", publico: "Adultos" },
  { id: 33, name: "Oxicodona", tarja: "Preta", forma: "Cápsula", publico: "Adultos" },
  { id: 34, name: "Morfina", tarja: "Preta", forma: "Injetável", publico: "Adultos" },
  { id: 35, name: "Fentanil", tarja: "Preta", forma: "Injetável", publico: "Adultos" },
  { id: 36, name: "Haloperidol", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 37, name: "Olanzapina", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 38, name: "Vitamina C", tarja: "Sem tarja", forma: "Comprimido", publico: "Todas as idades" },
  { id: 39, name: "Complexo B", tarja: "Sem tarja", forma: "Comprimido", publico: "Todas as idades" },
  { id: 40, name: "Ômega 3", tarja: "Sem tarja", forma: "Cápsula", publico: "Todas as idades" },
  { id: 41, name: "Colágeno", tarja: "Sem tarja", forma: "Cápsula", publico: "Adultos" },
  { id: 42, name: "Creatina", tarja: "Sem tarja", forma: "Pó", publico: "Adultos" },
  { id: 43, name: "Cafeína", tarja: "Sem tarja", forma: "Cápsula", publico: "Adultos" },
  { id: 44, name: "Vitamina D", tarja: "Sem tarja", forma: "Comprimido", publico: "Todas as idades" },
  { id: 45, name: "Magnésio", tarja: "Sem tarja", forma: "Comprimido", publico: "Todas as idades" },
  { id: 46, name: "Sinvastatina", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 47, name: "Enalapril", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 48, name: "Atenolol", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 49, name: "Nimesulida", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 50, name: "Diclofenaco", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 51, name: "Sertralina", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 52, name: "Fluoxetina", tarja: "Vermelha", forma: "Cápsula", publico: "Adultos" },
  { id: 53, name: "Escitalopram", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 54, name: "Amitriptilina", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 55, name: "Carbamazepina", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 56, name: "Fenitoína", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 57, name: "Valproato de Sódio", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 58, name: "Topiramato", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 59, name: "Lamotrigina", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 60, name: "Quetiapina", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 61, name: "Cefalexina", tarja: "Amarela", forma: "Cápsula", publico: "Todas as idades" },
  { id: 62, name: "Ciprofloxacino", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 63, name: "Levofloxacino", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 64, name: "Metronidazol", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 65, name: "Tinidazol", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 66, name: "Mebendazol", tarja: "Amarela", forma: "Comprimido", publico: "Todas as idades" },
  { id: 67, name: "Albendazol", tarja: "Amarela", forma: "Comprimido", publico: "Todas as idades" },
  { id: 68, name: "Ivermectina", tarja: "Amarela", forma: "Comprimido", publico: "Todas as idades" },
  { id: 69, name: "Hidrocortisona", tarja: "Amarela", forma: "Pomada", publico: "Todas as idades" },
  { id: 70, name: "Dexametasona", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
  { id: 71, name: "Betametasona", tarja: "Amarela", forma: "Pomada", publico: "Todas as idades" },
  { id: 72, name: "Miconazol", tarja: "Amarela", forma: "Creme", publico: "Todas as idades" },
  { id: 73, name: "Cetoconazol", tarja: "Amarela", forma: "Creme", publico: "Todas as idades" },
  { id: 74, name: "Fluconazol", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
  { id: 75, name: "Itraconazol", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
  { id: 76, name: "Sibutramina", tarja: "Preta", forma: "Cápsula", publico: "Adultos" },
  { id: 77, name: "Anfepramona", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 78, name: "Femproporex", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 79, name: "Mazindol", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 80, name: "Zolpidem", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 81, name: "Zopiclona", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 82, name: "Eszopiclona", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 83, name: "Triazolam", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 84, name: "Brotizolam", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 85, name: "Alprazolam", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
  { id: 86, name: "Lactobacillus", tarja: "Sem tarja", forma: "Pó", publico: "Todas as idades" },
  { id: 87, name: "Bifidobacterium", tarja: "Sem tarja", forma: "Pó", publico: "Todas as idades" },
  { id: 88, name: "Saccharomyces boulardii", tarja: "Sem tarja", forma: "Cápsula", publico: "Todas as idades" },
  { id: 89, name: "Ginkgo biloba", tarja: "Sem tarja", forma: "Comprimido", publico: "Adultos" },
  { id: 90, name: "Panax ginseng", tarja: "Sem tarja", forma: "Cápsula", publico: "Adultos" },
  { id: 91, name: "Valeriana", tarja: "Sem tarja", forma: "Comprimido", publico: "Adultos" },
  { id: 92, name: "Passiflora", tarja: "Sem tarja", forma: "Comprimido", publico: "Adultos" },
  { id: 93, name: "Melatonina", tarja: "Sem tarja", forma: "Comprimido", publico: "Adultos" },
  { id: 94, name: "Coenzima Q10", tarja: "Sem tarja", forma: "Cápsula", publico: "Adultos" },
  { id: 95, name: "Glucosamina e Condroitina", tarja: "Sem tarja", forma: "Pó", publico: "Adultos" },
  { id: 96, name: "Propranolol", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 97, name: "Tadalafila", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 98, name: "Sildenafila", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 99, name: "Finasterida", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
  { id: 100, name: "Dutasterida", tarja: "Vermelha", forma: "Cápsula", publico: "Adultos" },
];
  saveMedicines(medicines)
  return medicines
}

// ========================
// CRUD funcional
// ========================

const addMedicine = (medicines, newMedicine) => [...medicines, newMedicine]

const updateMedicine = (medicines, id, updates) =>
  medicines.map(medicine => (medicine.id === id ? { ...medicine, ...updates } : medicine))

const deleteMedicine = (medicines, id) =>
  medicines.filter(medicine => medicine.id !== id)

// ========================
// Listagem e formatação
// ========================

const filterMedicinesFromTarja = (medicines, tarja) =>
  medicines.filter(medicine => containsWord(medicine.tarja, tarja))

const containsWord = (texto, palavra) => texto.toLowerCase().includes(palavra.toLowerCase())
    
const searchMedicine = (medicines, palavra) => 
  medicines.filter((medicine) => containsWord(medicine.name, palavra))

// take: pega os primeiros n elementos de uma lista
const take = ([x, ...xs], n) => (n <= 0 || x === undefined) ? [] : [x, ...take(xs, n - 1)]

// drop: remove os primeiros n elementos e retorna o restante
const drop = ([x, ...xs], n) =>
  n <= 0 || x === undefined ? [x, ...xs].filter(v => v !== undefined) // evita [undefined]
  : drop(xs, n - 1) 

const chunkMedicines = ([x, ...xs], n) => {
    if (x === undefined) return []
    const first = take([x, ...xs], n)
    const rest = drop([x, ...xs], n)
    return [first, ...chunkMedicines(rest, n)]
  }

const idInList = (medicines, id) => medicines.filter((medicine) => medicine.id === id).length > 0

export const Medicamentos = {
  // Persistência
  loadMedicines, saveMedicines, resetMedicines, clearMedicines,

  // CRUD
  addMedicine, updateMedicine, deleteMedicine,

  // Exibição
  filterMedicinesFromTarja, searchMedicine, chunkMedicines, idInList
}