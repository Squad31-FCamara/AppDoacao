function getValues() {
    var pacote = document.querySelectorAll('[name=kit]:checked');
    var values = [];
    for (var i = 0; i < pacote.length; i++) {
      // utilize o valor aqui, adicionei ao array para exemplo
      values.push(pacote[i].value);
    }
    alert(values);
}