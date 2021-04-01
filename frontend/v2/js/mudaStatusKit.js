function mudaStatusKit() {

    const botaoSubmit = document.querySelector('#butao-agendar')
    botaoSubmit.addEventListener('click', event => {
        event.preventDefault()

        function getValues() {
            var kitsSelecionados = document.querySelectorAll('[name=kit]:checked');
            var values = [];
            for (var i = 0; i < kitsSelecionados.length; i++) {
              values.push(kitsSelecionados[i].value);
            }
            console.log(values);
            return values
        }

        getValues()

    })

}

mudaStatusKit()
