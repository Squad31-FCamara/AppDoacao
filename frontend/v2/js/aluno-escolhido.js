async function dadosAluno() {

    const id = sessionStorage.getItem("id")
    console.log(id)

    const resposta = await axios.get(`http://localhost:3333/donatarios/${id}`)
    const resultado = await resposta.data

    console.log(resultado)

    function renderDadosAluno(resultado) {
        const avatarAluno = document.querySelector("#avatar-aluno")
        avatarAluno.innerHTML = resultado.avatar

        const nomeAluno = document.querySelector("#nome-aluno")
        nomeAluno.innerHTML = resultado.nome_donatario

        const registroAluno = document.querySelector("#registro-aluno")
        registroAluno.innerHTML =`N° do registro do aluno (RA): ${resultado.ra_donatario}`

        const nivelAluno = document.querySelector("#nivel-aluno")
        nivelAluno.innerHTML = `${resultado.segmento_ensino}, ${resultado.serie_ensino} `

        const localidadeAluno = document.querySelector("#localidade-aluno")
        localidadeAluno.innerHTML = `Município: ${resultado.cidade}, UF: ${resultado.uf} `

        const sonhoAluno = document.querySelector("#sonho-aluno")
        sonhoAluno.innerHTML = resultado.sonho_profissao

    }

    renderDadosAluno(resultado[0])
}

dadosAluno()