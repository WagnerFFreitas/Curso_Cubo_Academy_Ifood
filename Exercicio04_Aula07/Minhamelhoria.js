let precoDoProduto = 37.50;
//Aqui eu crie uma fuçaõ IMPRIMEPRECO ao inves de escrever CONSOLE.LOG kkk
function imprimirPreco() {
    console.log("Preço do produto é:", precoDoProduto.toFixed(2));
}
function aplicarDesconto(valorDesconto) {
    precoDoProduto -= precoDoProduto * valorDesconto;
}
imprimirPreco();
aplicarDesconto(0.2); // Desconto de 20%
imprimirPreco();
aplicarDesconto(0.1); // Desconto adicional de 10%
imprimirPreco();
