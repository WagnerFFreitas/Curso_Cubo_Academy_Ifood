function solucao(numero, x) {
    if (numero % x === 0) {
    return numero + " é divisível por " + x + ".";
    } else {
    return numero + " não é divisível por " + x + ".";
    }
}
//let numero = parseInt(prompt("Digite o número: "));
//let x = parseInt(prompt("Digite o valor de X: "));
//As linhas acima so funcionam dentro do ambiente do desafio da Cubo Academy
let numero = 20;
let x = 5;
let resultado = solucao(numero, x);
console.log(resultado);  
