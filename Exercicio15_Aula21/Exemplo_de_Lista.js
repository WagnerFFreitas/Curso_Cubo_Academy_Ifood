const listadenumeros = [34, 14, 56, 768, 8, 81, 3, 6, 10];
// 1. Qual a soma deles?
//A contagem ira começar a parir do valor 0
//na variável ACUMULADOR 
let acumulador = 0;
for (const numero of listadenuumeros) {|
  acumulador += numero;
}
//Será exibido o valor da soma dos números na
//variável LISTADENUMEROS
console.log("A soma é", acumulador);

// 2. Qual o menor deles?
//A variável OMENORNUMEROATEAGORA terá o valor fazio
// UNDERFINED

let omenornumeroateagora;
for (const numero of listadenumeros) {
  if (omenornumeroateagora === undefined) {
    omenornumeroateagora = numero;
// Se o numero for menor que o próximo 
// então parar e exibir qual é o numero
} else {
  if (numero < omenornumeroateagora) {
    omenornumeroateagora = numero;
  }
}
}
console.log("O menor número é: ", omenornumeroateagora);
