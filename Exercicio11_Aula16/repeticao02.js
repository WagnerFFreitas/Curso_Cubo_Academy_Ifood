//Quantos numeros entre 1 e 100000 são multiplos de 17
let resposta = 0;
let numero = 1;
while (numero <= 100000){
   if (numero % 17 === 0){
   //O simbolo % significa multiplo
     resposta += 1;   
   } 
   numero += 1;
   //Se não for acrescentado mais 1 a variavel NUMERO, O CODIGO FICARA EM LOOP
}
console.log("Resposta é: ", resposta);