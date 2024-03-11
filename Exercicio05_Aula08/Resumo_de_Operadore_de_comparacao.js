// O bloco abaixo cria as variáveis.
let precodoproduto1 = 13.29;
let precodoproduto2 = 2.8;
let precodoproduto3 = 4.85;
let custo = 0;

// O bloco abaixo verifica se o preço do produto 1 é menor ou igual a 18.
if (precodoproduto1 <= 18) {
    console.log("Comprei o produto 1");
    custo += precodoproduto1;  // Adiciona o preço do produto 1 ao custo total
}

// O bloco abaixo verifica se o preço do produto 2 é menor que 3.
if (precodoproduto2 < 3) {
    if (precodoproduto2 >= 1.5) { // Verifica se o preço do produto 2 está entre 1.5 e 3
        console.log ("Comprei o produto 2");
        custo += precodoproduto2;  // Adiciona o preço do produto 2 ao custo total
    } else {
        console.log ("Tem algo errado com o produto 2");
    }
}

console.log ("Comprei o produto 3");
custo += precodoproduto3;  // Adiciona o preço do produto 3 ao custo total
console.log ("Eu paguei", custo, "reais.");
