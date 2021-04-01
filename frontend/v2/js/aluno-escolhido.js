import criaLista from './criaLista.js'

async function dadosAluno() {

    const id = sessionStorage.getItem("id")
    //console.log(id)

    const resposta = await axios.get(`http://localhost:3333/donatarios/${id}`)
    const resultado = await resposta.data

    //console.log(resultado)

    function renderDadosAluno(resultado) {
        const avatarAluno = document.querySelector("#avatar-aluno")
        avatarAluno.innerHTML = `<img src="../imgs/${resultado.avatar}" class="rounded-circle"  alt="Avatar aluno responsiva">`

        const escolaAluno = document.querySelector("#escola-aluno")
        escolaAluno.innerHTML = `${resultado.nome_escola}`
        
        const nivelAluno = document.querySelector("#nivel-aluno")
        nivelAluno.innerHTML = `${resultado.segmento_ensino}, ${resultado.serie_ensino} ano`

        const localidadeAluno = document.querySelector("#localidade-aluno")
        localidadeAluno.innerHTML = `Município: ${resultado.cidade}, UF: ${resultado.uf} `

        const sonhoAluno = document.querySelector("#sonho-aluno")
        sonhoAluno.innerHTML = resultado.sonho_profissao
    }

    renderDadosAluno(resultado[0])
}

async function listaAluno() {

    const id = sessionStorage.getItem("id")
    //console.log(id)

    const resposta = await axios.get(`http://localhost:3333/donatarios/${id}/lista`)
    const resultado = await resposta.data

    //console.log(resultado)

    resultado.map(lista => criaLista(lista.nome, lista.itens, lista.id, lista.status_item))
}

dadosAluno()
listaAluno()