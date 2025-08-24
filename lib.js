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
    { id: 5, name: "Amoxicilina", tarja: "Amarela", forma: "Cápsula", publico: "Todas as idades" },
    { id: 6, name: "Metformina", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
    { id: 7, name: "Captopril", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
    { id: 8, name: "Losartana", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
    { id: 9, name: "Ranitidina", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
    { id: 10, name: "Azitromicina", tarja: "Amarela", forma: "Cápsula", publico: "Todas as idades" },
    { id: 11, name: "Lorazepam", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
    { id: 12, name: "Diazepam", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
    { id: 13, name: "Clonazepam", tarja: "Preta", forma: "Comprimido", publico: "Adultos" },
    { id: 14, name: "Risperidona", tarja: "Preta", forma: "Cápsula", publico: "Adultos" },
    { id: 15, name: "Metadona", tarja: "Preta", forma: "Cápsula", publico: "Adultos" },
    { id: 16, name: "Furosemida", tarja: "Amarela", forma: "Comprimido", publico: "Adultos" },
    { id: 17, name: "Salbutamol", tarja: "Amarela", forma: "Spray", publico: "Todas as idades" },
    { id: 18, name: "Prednisona", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
    { id: 19, name: "Ácido Acetilsalicílico", tarja: "Vermelha", forma: "Comprimido", publico: "Adultos" },
    { id: 20, name: "Dipirona", tarja: "Vermelha", forma: "Cápsula", publico: "Todas as idades" },
    { id: 21, name: "Loratadina", tarja: "Vermelha", forma: "Comprimido", publico: "Todas as idades" },
    { id: 22, name: "Claritromicina", tarja: "Amarela", forma: "Cápsula", publico: "Todas as idades" },
    { id: 23, name: "Naproxeno", tarja: "Amarela", forma: "Cápsula", publico: "Adultos" },
    { id: 24, name: "Midazolam", tarja: "Preta", forma: "Cápsula", publico: "Adultos" },
    { id: 25, name: "Oxicodona", tarja: "Preta", forma: "Cápsula", publico: "Adultos" }
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

const listMedicines = medicines =>
  medicines.map(medicine =>
    `${medicine.id} - "${medicine.name}" (${medicine.tarja}, ${medicine.forma}, ${medicine.publico})`
  ).join('\n')

const filterMedicinesFromTarja = (medicines, tarja) =>
  medicines.filter(medicine => medicine.tarja === tarja)
  
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

  listMedicines, filterMedicinesFromTarja, searchMedicine, chunkMedicines, idInList,
}