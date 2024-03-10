// Bloco abaixo cria a função SOLUCAO e NAOMEXER
function solucao (numero1, numero2){
    const resto = numero1 % numero2;
    const resposta = resto === 0;
    console.log (resposta)
}
function naomexer (input){
    const numero1 = input.split (' ')[0];
    const numero2 = input.split (' ')[1];
    solucao (numero1, numero2);
}

// let input = require('fs').readfilesync ('/dev/stdin','utf8');
// A linha acima só funciona dentro do ambiente do desafio da Cubo Academy
const input = "10 5";
// A linha acima e para testar o código dentro do VSCode
naomexer (input);