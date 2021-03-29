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
        const ulEscolas = document.querySelector('#escolas')
        escolas.map(escola => {
            const linhaEscola = document.createElement('button')
            linhaEscola.innerHTML = `${escola.nome_escola} <br> 
            Rede ${escola.rede} <br> 
            Endereço: ${escola.logradouro}, ${escola.complemento} - Bairro: ${escola.bairro}`
            linhaEscola.setAttribute("id", `${escola.id_escola}`)
            linhaEscola.setAttribute("class", "list-group-item list-group-item-action")
            linhaEscola.setAttribute("type", "button")
            ulEscolas.appendChild(linhaEscola)
        })
    }
})


