const listadenumeros = [34, 14, 56, 768, 8, 81, 3, 6, 10]; // 1. Qual a soma deles?

let acumulador = 0; // Lembrando que a contagem ira começar a parir do valor 0 na variável ACUMULADOR.
for (const numero of listadenuumeros) {|
  acumulador += numero;
}

console.log ("A soma é", acumulador); // Será exibido o valor da soma dos números na variável LISTADENUMEROS.

// 2. Qual o menor deles?

let omenornumeroateagora; // A variável OMENORNUMEROATEAGORA terá o valor fazio UNDERFINED.

for (const numero of listadenumeros) {
  if (omenornumeroateagora === undefined) {
    omenornumeroateagora = numero;

  // Se o número for menor que o próximo então para e exibir qual é o numero.
  } else {
    if (numero < omenornumeroateagora) {
      omenornumeroateagora = numero;
    }
  }
}
console.log ("O menor número é: ", omenornumeroateagora);