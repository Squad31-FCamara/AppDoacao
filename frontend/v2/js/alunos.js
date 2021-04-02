import criaCard from './criaCard.js'

async function getAlunosPorEscola() {
    
    //const id = window.location.href.split("?id=")[1]
    const id_escola = localStorage.getItem("id_escola")
    
    const resposta = await axios.get(`http://localhost:3333/donatarios/escola/${id_escola}`)
    const resultado = await resposta.data
    console.log(resultado)

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    function grabCheckboxValues() {
        const checkboxValues = [];
        checkboxes.forEach((checkbox) => {
              if (checkbox.checked) checkboxValues.push(checkbox.value);
        });
        return checkboxValues;
    }

    console.log(grabCheckboxValues())


    resultado.map(aluno => criaCard(aluno.avatar, aluno.nome_escola, aluno.segmento_ensino, aluno.serie_ensino, aluno.cidade, aluno.uf, aluno.sonho_profissao, aluno.id_donatario, aluno.tipo)) 

    const buttonsAluno = document.querySelectorAll(".button-aluno")

    buttonsAluno.forEach( button => button.addEventListener('click', () => {
       
        localStorage.setItem("id_aluno", button.id)
        })
    )

    

    /* 
    if(window.location.href !== "http://127.0.0.1:5500/frontend/v2/aluno.html"){
        sessionStorage.clear()
    } */

}

getAlunosPorEscola()

