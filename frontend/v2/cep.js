const botaoBuscarCep = document.querySelector('#button-cep')

botaoBuscarCep.addEventListener('click', event => {
    event.preventDefault()

    const inputCep = document.querySelector('#cep')
    const valorCep = inputCep.value.replace("-", "")
    const url = `https://viacep.com.br/ws/${valorCep}/json/`;

    fetch(url).then(response => {
        return response.json()
    }).then(data => {
        if (data.error){
            alert("O CEP digitado é inválido.");
            return ;
        }
        preencherCampos(data)
    })

})

function preencherCampos(data) {
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#uf");

    cidade.value = data.localidade;
    estado.value = data.uf;
}