//Quantos numeros entre 1 e 100000 são multiplos de 17
let resposta = 0;
let numero = 1;
while (numero <= 100000){
  //NUMERO <= 1000 Vai percorrer de 1 até que seja menor e igual a 1000
  if (numero % 17 === 0){
  //O numero foi substituído por uma variável NUMERO 
  //O simbolo % significa múltiplo
  resposta += 1;   
  } 
  numero += 1;
  //Se não for acrescentado mais 1 a variável NUMERO, O código ficara em um loop infinito
}
console.log("Resposta é: ", resposta);