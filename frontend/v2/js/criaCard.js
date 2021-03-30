export default function criaCard(imagem, nome, nivel, ano, municipio, uf, sonho, doacao, id) {
    const conjCard = document.querySelector('.card-deck')
    
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.setAttribute('id', `${doacao}`)

    card.innerHTML = `
    <img class="card-img-top" src="" alt="Avatar do aluno">
    <div class="card-body text-center">
        <h5 class="card-title">${nome} - ${nivel}, ${ano}</h5>
        <p class="card-text">${municipio}, ${uf}</p>
        <p class="card-text font-italic">${sonho}</p>
        <button class="btn btn-primary button-aluno" id=${id} type="submit"><a href="./aluno.html">Quero doar!<a></button>
    </div>
    `

    conjCard.append(card) 

} 
