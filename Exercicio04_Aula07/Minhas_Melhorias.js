let precodoproduto = 37.50;

//No bloco abaixo e criada as funções IMPRIMEPRECO e APLICARDESCONTO ao invés de escrever CONSOLE.LOG kkk
function imprimirpreco () {
    console.log ("Preço do produto é: ", precodoproduto.toFixed(2));
}
function aplicardesconto (valordesconto) {
    precodoproduto -= precodoproduto * valordesconto;
}

imprimirpreco ();
aplicardesconto (0.2); // Desconto de 20%;
imprimirpreco ();
aplicardesconto (0.1); // Desconto adicional de 10%;
imprimirpreco ();
