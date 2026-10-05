function comprar(){
    let [tipo,quantidade] = obterValores();
    if (isNaN(quantidade) || quantidade < 1) return;
    remover(tipo,quantidade);
}

function obterValores(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    return [tipo,quantidade];
}

function remover(tipo,quantidade){
    let listaTipos = ['inferior','superior','pista'];
    let listaId = ['qtd-inferior','qtd-superior','qtd-pista'];

    posicao = listaTipos.indexOf(tipo);
    let quantidadeDisponivel = parseInt(document.getElementById(listaId[posicao]).textContent)
    if (quantidadeDisponivel < quantidade) {
        alert(`Quantidade indisponível para ${tipo}`);
        return;
    }
    quantidadeDisponivel = quantidadeDisponivel - quantidade;
    document.getElementById(listaId[posicao]).textContent = quantidadeDisponivel;
    alert('Compra realizda com sucesso!')
}
