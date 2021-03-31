export default function criaElemento() {
    const conjCard = document.querySelector('.card-deck')
    

    conjCard.innerHTML = `
    <div class="card-body text-center">
        <h5 class="card-title">Ainda não há alunos cadastrados para essa escola.</h5>
    </div>
    `

} 