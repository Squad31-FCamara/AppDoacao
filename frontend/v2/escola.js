const botaoSubmit = document.querySelector('#localidade')

botaoSubmit.addEventListener('click', event => {
    event.preventDefault()

    const uf = document.querySelector('#uf').value
    const cidade = document.querySelector('#cidade').value
    console.log(uf, cidade)

    const valores = {'uf': uf, 'cidade': cidade}

    
    axios.post('http://localhost:3333/escolas/localidade', valores)
    .then(response => criarListaEscolas(response.data))
    .catch(error => console.log(error))


    const criarListaEscolas = (escolas) => {
        
        const opcoesEscolas = document.querySelector('#form-escolas')

        escolas.map(escola => {

            const checkEscola = document.createElement('input')
            checkEscola.setAttribute("type", "radio")
            checkEscola.setAttribute("class", "form-check-input")
            checkEscola.setAttribute("value", `${escola.id_escola}`)
            checkEscola.setAttribute("name", `id` )
            checkEscola.setAttribute("id", `opcao${escola.id_escola}` )

            const labelEscola = document.createElement('label')
            labelEscola.setAttribute("class", "form-check-label")
            labelEscola.setAttribute("for", `id_escola` )
            labelEscola.innerHTML = `${escola.nome_escola} <br> 
            Rede ${escola.rede} <br> 
            Endereço: ${escola.logradouro}, ${escola.complemento} - ${escola.bairro}`

            const groupEscolas = document.createElement('div')
            groupEscolas.setAttribute("class", "form-group py-3")

            groupEscolas.appendChild(checkEscola)
            groupEscolas.appendChild(labelEscola)

            opcoesEscolas.appendChild(groupEscolas)

        })
    }
})

const botaoProximo = document.querySelector("#busca-alunos")

botaoProximo.addEventListener('click', event => {
    event.preventDefault() 

    const id = mostrarRadioValue()

    console.log(id)

    axios.get('http://localhost:3333/donatarios/escolas/:id', {id : id})
    .then(response => console.log(response.data))
    .catch(error => console.log(error))


})

function mostrarRadioValue() {
    const ele = document.getElementsByName('id');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            const id = ele[i].value
            return id
        }
        
    }
}