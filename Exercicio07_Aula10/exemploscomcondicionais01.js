let precoDoProduto01 = 19.29;
let precoDoProduto02 = 0.80;
let precoDoProduto03 = 4.85;
//Se o produto 01 for menor que R$18,00 comprar, nao foi incluso a condicional.
if (precoDoProduto01 <= 18){
console.log("Comprei o produto 01");
}
//Se o produto 02 for menor que R$3,00 e maior ou igual a R$1.5 comprar,
// e se for menor que R$1.5 informar que algo esta errado.
if (precoDoProduto02 < 3){
    if (precoDoProduto02 => 1.5){
    console.log("Comprei o produto 02");
    }else{
    console.log("Algo esta errado com o produto 02");
    }
}
//Informa que e para comprar o produto
console.log("Comprei o produto 03");