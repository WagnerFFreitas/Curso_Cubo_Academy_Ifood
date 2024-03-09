// Logica do programa da calculadora
// numero1 = 10
// numero2 = 5
// operacao = "soma"
//Verificar se a operacao é uma soma -> numero1 + numero2
//Se não, verificar se é uma subtracao -> numero1- numero2
//Se não, verificar se é uma multiplicacao -> numero1 x numero2
//Se não, verificar se é uma divisao -> numero1 / numero2

//Bloco abaixo cria as variáveis
let operacao = "soma";
let numero1 = 10;
let numero2 = 5;

// O bloco abaixo verifica o tipo de operação
if (operacao === "soma") {
  console.log(numero1 + numero2);  // Se a operação for soma, exibe a soma dos números
} else if (operacao === "subtracao") {
  console.log(numero1 - numero2);  // Se a operação for subtração, exibe a subtração dos números
} else if (operacao === "multiplicacao") {
  console.log(numero1 * numero2);  // Se a operação for multiplicação, exibe o produto dos números
} else if (operacao === "divisao") {
  console.log(numero1 / numero2);  // Se a operação for divisão, exibe o resultado da divisão dos números
}