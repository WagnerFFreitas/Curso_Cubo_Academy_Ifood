//Obs:
//Sempre ficar atento a letras maiúsculas e minusculas.
//Sempre finalizar uma linha de comando com ponto e virgula exemplo : console.log("Ola mundo !");
const endereco="Avenida 1";
let precodoleite=9.5;
let precodoqueijo=30;
//Se colocar a variável precodapizza sem valor, ira exibir caso seja solicitado o valor um erro (undefined)
let precodapizza;
console.log("Preço do leite:", precodoleite);
console.log("Preço do queijo:", precodoqueijo);
console.log("Preço da pizza:", precodapizza);//ira aparece este erro(undefined), pois a variável nao tem valor
precodoleite=8;
//LET : O seu valor pode ser alterado de acordo coma a necessidade;
//O valor da variável precodoleite nao e exibido até que as linhas abaixo seja incluídas para puxar os valores
console.log("Preço do leite:", precodoleite);
console.log("Preço do queijo:", precodoqueijo);