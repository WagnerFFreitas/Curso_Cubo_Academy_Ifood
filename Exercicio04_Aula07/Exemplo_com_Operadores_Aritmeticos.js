let precodoproduto = 37.50;
console.log ("Preço do produto é: ", precodoproduto);

//A cada vez que for emitido um valor, o próximo resultado será o novo valor, mais o cálculo exigido;
precodoproduto = 38.50; // Desta forma eu faço o calculo, colocando o valor na variável.
console.log ("Preço do produto é: ", precodoproduto);

precodoproduto = precodoproduto + 1.0;//Desta forma quem faz o cálculo é o computador
console.log ("Preço do produto é: ", precodoproduto);

precodoproduto += 1.0; // E outra forma de se fazer o cálculo e usando operador +=
console.log ("Preço do produto é: ", precodoproduto);

precodoproduto = precodoproduto * 0.8; // Desta forma será feito um desconto de 20%;
console.log ("Preço do produto é: ", precodoproduto);

precodoproduto *= 0.80; // Desta forma sera feito o mesmo desconto de 20% porem usando outro operador *=
console.log ("Preço do produto é: ", precodoproduto);

precodoproduto -= precodoproduto * 0.2; // Outra forma de dar desconto usando o operador -= 
console.log ("Preço do produto é: ", precodoproduto);

const desconto = precodoproduto * 0.2;
precodoproduto -= desconto; // Outra foram de se fazer desconto.
