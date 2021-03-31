import criaCard from './criaCard.js'
import criaElemento from './escola-sem-alunos.js'

async function getAlunosPorEscola() {
    
    const id = window.location.href.split("?id=")[1]

    const resposta = await axios.get(`http://localhost:3333/donatarios/escola/${id}`)
    const resultado = await resposta.data
    console.log(resultado)

    if(resultado.lenght>0){
        resultado.map(aluno => criaCard(aluno.avatar, aluno.nome_donatario, aluno.segmento_ensino, aluno.serie_ensino, aluno.cidade, aluno.uf, aluno.sonho_profissao, aluno.tipo_doacao, aluno.id_donatario)) 
    } else {
        criaElemento()
    }

    const buttonsAluno = document.querySelectorAll(".button-aluno")

    buttonsAluno.forEach( button => button.addEventListener('click', (event) => {
       
        sessionStorage.setItem("id", button.id)
    })
    )

    if(window.location.href !== "http://127.0.0.1:5500/frontend/v2/aluno.html"){
        sessionStorage.clear()
    }

}

getAlunosPorEscola()

