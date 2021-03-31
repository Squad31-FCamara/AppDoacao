export default function criaCard(doacao, imagem, nome_escola, nivel, ano, municipio, uf, sonho, id) {
    const conjCard = document.querySelector('.card-columns')
    
    const card = document.createElement('div')
    card.setAttribute('class', 'card text-center')
    card.setAttribute('id', `${doacao}`)

    card.innerHTML = `
    <img class="mx-auto p-3" src="../imgs/${imagem}" width="130" height="130" alt="Avatar do aluno">
    <div class="card-body">
        <h5 class="card-title">${nome_escola} - ${nivel}, ${ano}</h5>
        <p class="card-text">${municipio}, ${uf}</p>
        <p class="card-text font-italic">${sonho}</p>
        <button class="btn btn-secondary button-aluno" id=${id} type="submit"><a href="./aluno.html">Quero doar!<a></button>
    </div>
    `

    conjCard.append(card) 

} 
