const lista = document.getElementById('lista')
const input = document.getElementById('meu-input')

const insereItem = (event) => {
    const addFruta = document.createElement('li')
    addFruta.innerHTML = input.value
    lista.insertAdjacentElement('beforeend',addFruta)
    input.value = ''


}