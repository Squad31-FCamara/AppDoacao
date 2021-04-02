function mudaStatusKit() {

    const botaoSubmit = document.querySelector('#botao-agendar')
    botaoSubmit.addEventListener('click', (event) => {
        event.preventDefault()

        function getValues() {
            var kitsSelecionados = document.querySelectorAll('[name=kit]:checked');
            var values = [];
            for (var i = 0; i < kitsSelecionados.length; i++) {
              values.push(kitsSelecionados[i].value);
            }
            //console.log(values)
            return values
        }

        const ids = getValues()

        ids.map(id => {
            //console.log(id)
            axios.patch(`http://localhost:3333/kit/${id}/status`)
            .then(response => criarAlerta(response.data))
            .catch(error => console.log(error))

            const criarAlerta = () => {
                const alerta = document.querySelector('#mensagem')
                alerta.setAttribute('class', 'alert alert-success')
                alerta.setAttribute('role', 'alert')
                
                alerta.innerHTML = `
                <strong>Doação agendada com sucesso!</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> `
            }
        })

    })

}

mudaStatusKit()
