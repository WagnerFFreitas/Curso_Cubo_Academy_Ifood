//As modificações foram feita baseadas em alguns
//conteúdos que foram pesquisados na internet
// Declaração de variáveis
let numero = 5436; // Um número inteiro
let texto = "oi"; // Uma string de texto
let vazia; // Variável não inicializada (undefined)
let verdade = numero > 100; // Verifica se 'numero' é maior que 100
let inverdade = numero < 10; // Verifica se 'numero' é menor que 10

// Saída de valores das variáveis usando template literals
console.log(`Numero: ${numero}`);
console.log(`Texto: ${texto}`);
console.log(`Vazia: ${vazia}`);
console.log(`Verdade: ${verdade}`);

// Verificação dos tipos das variáveis
console.log(`Tipo da variável 'numero': ${typeof numero}`);
console.log(`Tipo da variável 'texto': ${typeof texto}`);
console.log(`Tipo da variável 'vazia': ${typeof vazia}`);
console.log(`Tipo da variável 'verdade': ${typeof verdade}`);

// Separação visual
console.log("--------------------------------------");

// 1ª Comparação de valores
console.log("É maior?", numero > 5436);
console.log("É maior ou igual?", numero >= 5436);
console.log("É menor?", numero < 10000);
console.log("É menor ou igual?", numero <= 5436);

// Separação visual
console.log("--------------------------------------");

//2ª Aqui sera feito uma comparação
console.log("É igual?", numero === 900);
console.log("É diferente?", texto !== "oi");