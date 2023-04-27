// atencao : segurando shift

const input = document.getElementsByTagName('input')[0]

const paragrafo = document.getElementsByTagName('p')[0]

const checaCaps = (event) => {

    console.log(event)

    if(event.shiftKey) {
        paragrafo.innerHTML = 'Atencao: Segurando Shift'
    } else {
        paragrafo.innerHTML = ''
    }

}