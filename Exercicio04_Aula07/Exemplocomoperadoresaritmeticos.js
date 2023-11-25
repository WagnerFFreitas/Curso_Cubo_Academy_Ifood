let precoDoProduto = 37.50;
console.log("Preço do produto é: ", precoDoProduto);

//A cada vez que for emitido um valor, o proximo resultado sera o novo valor mais calculo exegido

precoDoProduto = 38.50;//Desta forma eu faco calculo coloco o valor na variavel
console.log("Preço do produto é: ", precoDoProduto);

precoDoProduto = precoDoProduto + 1.0;//Desta forma quem faz o calculo e o computador
console.log("Preço do produto é:", precoDoProduto);

precoDoProduto += 1.0;//E outra forma de se fazer o calculo usando operador +=
console.log("Preço do produto é:", precoDoProduto);

precoDoProduto = precoDoProduto * 0.8;//Desta forma sera feito um desconto de 20%
console.log("Preço do produto é:", precoDoProduto);

precoDoProduto *= 0.80;//Desta forma sera feito o mesmo desconto de 20% porem usando outro operador *=
console.log("Preço do produto é:", precoDoProduto);

precoDoProduto -= precoDoProduto * 0.2;//outra forma de dar desconto usando o operador -=
console.log("Preço do produto é:", precoDoProduto);

const desconto = precoDoProduto * 0.2;
precoDoProduto -= desconto;//outra foram de se fazer desconto
