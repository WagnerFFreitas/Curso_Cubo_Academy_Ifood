// As modificações foram feita baseadas em alguns conteúdos que foram pesquisados na internet sobre declaração de variáveis.

// O Bloco abaixo cria as variáveis.
let numero = 5436; // Um número inteiro;
let texto = "oi"; // Uma string de texto;
let vazia; // Variável não inicializada (undefined);
let verdade = numero > 100; // Verifica se 'numero' é maior que 100;
let inverdade = numero < 10; // Verifica se 'numero' é menor que 10;

// O bloco abaixo são as saídas dos valores das variáveis usando no template literals.
console.log (`Numero: ${numero}`);
console.log (`Texto: ${texto}`);
console.log (`Vazia: ${vazia}`);
console.log (`Verdade: ${verdade}`);

// O bloco abaixo verifica os tipos de variáveis.
console.log (`Tipo da variável 'numero': ${typeof numero}`);
console.log (`Tipo da variável 'texto': ${typeof texto}`);
console.log (`Tipo da variável 'vazia': ${typeof vazia}`);
console.log (`Tipo da variável 'verdade': ${typeof verdade}`);

console.log("--------------------------------------"); // Separação visual.

// O bloco abaixo e a 1ª comparação de valores.
console.log ("É maior? ", numero > 5436);
console.log ("É maior ou igual? ", numero >= 5436);
console.log ("É menor? ", numero < 10000);
console.log ("É menor ou igual? ", numero <= 5436);

console.log("--------------------------------------"); // Separação visual.

// O bloco abaixo e o 2ª que sera feito uma comparação.
console.log ("É igual? ", numero === 900);
console.log ("É diferente? ", texto !== "oi");