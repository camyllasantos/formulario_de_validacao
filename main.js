function validaFormulario() {
    
    let valorCampoA = document.getElementById('campoA').value;
    let valorCampoB = document.getElementById('campoB').value;


    valorCampoA = parseFloat(valorCampoA);
    valorCampoB = parseFloat(valorCampoB);

    
    if (valorCampoB > valorCampoA) {
        exibirMensagemPositiva();
    } else {
        exibirMensagemNegativa();
    }
}

function exibirMensagemPositiva() {
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerHTML = '<p>Formulário valido!</p>';
    mensagemDiv.style.color = 'green';
}

function exibirMensagemNegativa() {
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerHTML = '<p>Formulário invalido!</p>';
    mensagemDiv.style.color = 'red';
}

console.log(validaFormulario)