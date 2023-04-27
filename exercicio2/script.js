
//ESCONDENDO SENHA
const inputSenha = document.getElementById('password')

const escondeSenha = (event) => {
    event.preventDefault()
    inputSenha.setAttribute('type','password')

}

//ALTERANDO A CLASSE DO FORM
const formulario = document.getElementsByTagName('form')[0]

formulario.classList.remove('light')

formulario.classList.add('dark')