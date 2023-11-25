let precoDoProduto01 = 19.29;
let precoDoProduto02 = 0.80;
let precoDoProduto03 = 4.85;

let custo = 0;//Variavel criad para calcula a gasto com os produtos

//Se o produto 01 for menor que R$18,00 comprar, nao foi incluso a condicional.
if (precoDoProduto01 <= 18){
    console.log("Comprei o produto 01");
    //Na linha 9 e modificado o valor da variavel
    custo = custo + precoDoProduto01;
}
//Se o produto 02 for menor que R$3,00 e maior ou igual a R$1.5 comprar,
// e se for menor que R$1.5 informar que algo esta errado.
if (precoDoProduto02 < 3){
    if (precoDoProduto02 => 1.5){
        console.log("Comprei o produto 02");
        //pode ser usado duas formas de calculo
        custo += precoDoProduto02;
        //Pode ser usado desta forma tambem
        //custo = custo + precoDoProduto02;
    }else{
        console.log("Algo esta errado com o produto 02");
    }
}
//Informa que e para comprar o produto
console.log("Comprei o produto 03");
//Exibe o quanto foi pago
console.log("Eu paguei", custo,"reais.");