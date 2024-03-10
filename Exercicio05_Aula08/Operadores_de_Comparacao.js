// Este exercício trabalha as variáveis boleanas.

// O bloco baixo abaixo cria as variáveis.
let numero = 5436;
let texto = "oi";
let vazia;
let verdade = numero > 100; // Verifica se a variável e verdadeira (TRUE);
let inverdade = numero <10; // Verifica se a variável e falsa (FALSE).

// O bloco abaixo e a 1ª forma de checa o tipo de uma variável.
console.log ("Numero: ",numero); // Se caso quiser exibir o numero;
console.log ("Texto: ",texto); // Se caso quiser exibir o texto;
console.log ("Vazia: ",vazia); // Vai exibir a variável vazia;
console.log ("Verdade: ",verdade); // Se caso quiser exibir verdadeiro ou falso.

//O bloco abaixo e a 2ª forma de checa o tipo de uma variável.
console.log ("Tipo da variável numero: ", typeof numero);
console.log ("Tipo da variável texto: ", typeof texto);
console.log ("Tipo da variável vazia: ", typeof vazia);
console.log ("Tipo da variável verdade: ", typeof verdade);

console.log ("--------------------------------------"); // Esta linha e só forma simples de separar o conteúdo acima

// O bloco abaixo e o 1ª forma de se comparar os valores se são: MAIOR, MAIOR OU IGUAL, MENOR, MENOR OU MAIOR.
console.log ("É maior? ", numero > 5436);
console.log ("É maior ou igual? ", numero >= 5);
console.log ("É menor? ", numero < 10000);
console.log ("É menor ou maior? ", numero <= 5436);

console.log ("--------------------------------------"); // Esta linha e só forma simples de separar o conteúdo acima.

// O bloco abaixo e a 2ª forma de comparar os valores se são: IGUAL ou DIFERENTE.
console.log ("É igual? ", numero === 900);
console.log ("É igual? ", texto === 900);
console.log ("É igual? ", texto === "oi");
console.log ("É diferente? ", texto !== "oi");
console.log ("É diferente? ", texto !== "Ola");