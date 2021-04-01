function mudaStatusKit() {

    const botaoSubmit = document.querySelector('#botao-agendar')
    botaoSubmit.addEventListener('click', event => {
        event.preventDefault()

        function getValues() {
            var kitsSelecionados = document.querySelectorAll('[name=kit]:checked');
            var values = [];
            for (var i = 0; i < kitsSelecionados.length; i++) {
              values.push(kitsSelecionados[i].value);
            }
            console.log(values)
            return values
        }

        const ids = getValues()

        ids.map(id => {
            console.log(id)
            axios.get(`http://localhost:3333/kit/${id}/status`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        })

    })

}

mudaStatusKit()
