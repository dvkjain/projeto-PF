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
    { id: 46, name: "Amoxicilina Pediátrica", tarja: "Amarela", forma: "Suspensão oral", publico: "Crianças" },
    { id: 47, name: "Ibuprofeno Pediátrico", tarja: "Vermelha", forma: "Suspensão oral", publico: "Crianças" },
    { id: 48, name: "Paracetamol Pediátrico", tarja: "Vermelha", forma: "Suspensão oral", publico: "Crianças" },
    { id: 49, name: "Dipirona Gotas", tarja: "Vermelha", forma: "Solução oral", publico: "Crianças" },
    { id: 50, name: "Loratadina Pediátrica", tarja: "Vermelha", forma: "Xarope", publico: "Crianças" }
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