import criaCard from './criaCard.js'
import criaElemento from './escola-sem-alunos.js'

async function getDonatarios(id_escola) {
        
    const resposta = await axios.get(`http://localhost:3333/donatarios/escola/${id_escola}`)
    const resultado = await resposta.data
    return resultado
}

async function getAlunosPorEscola() {
    
    //const id = window.location.href.split("?id=")[1]
    const id_escola = sessionStorage.getItem("id_escola")
    
    const resultado = await getDonatarios(id_escola)
    
    if(resultado.length == 0){
        criaElemento()
    }

    resultado.map(aluno => criaCard(aluno.avatar, aluno.nome_escola, aluno.segmento_ensino, aluno.serie_ensino, aluno.cidade, aluno.uf, aluno.sonho_profissao, aluno.id_donatario, aluno.tipo)) 

    const buttonsAluno = document.querySelectorAll(".button-aluno")

    buttonsAluno.forEach( button => button.addEventListener('click', () => {
       
        sessionStorage.setItem("id_aluno", button.id)
        })
    )

        /* 
    if(window.location.href !== "http://127.0.0.1:5500/frontend/v2/aluno.html"){
        sessionStorage.clear()
    } */
    

}

getAlunosPorEscola()

async function filtraCards(valor) {
    
    const id_escola = sessionStorage.getItem("id_escola")

    const resultado = await getDonatarios(id_escola)

    const tipoDoacao = resultado.filter((doacao) => {return doacao.tipo === `${valor}`})

    tipoDoacao.map(aluno => criaCard(aluno.avatar, aluno.nome_escola, aluno.segmento_ensino, aluno.serie_ensino, aluno.cidade, aluno.uf, aluno.sonho_profissao, aluno.id_donatario, aluno.tipo)) 

    const buttonsAluno = document.querySelectorAll(".button-aluno")

    buttonsAluno.forEach( button => button.addEventListener('click', () => {
       
        sessionStorage.setItem("id_aluno", button.id)
        })
    )

}