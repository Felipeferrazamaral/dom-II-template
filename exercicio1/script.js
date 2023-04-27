// adicionar o elemento Item 0 e Item 5

const lista = document.getElementById('lista')

console.log(lista)


const itemZero = document.createElement('li')
itemZero.innerHTML = 'Item 0'
console.log(itemZero)
const itemCinco = document.createElement('li')
itemCinco.innerHTML = 'Item 5'
console.log(itemCinco)
//colocando os elementos dentro do html


lista.insertAdjacentElement('afterbegin', itemZero)
lista.insertAdjacentElement('beforeend',itemCinco)