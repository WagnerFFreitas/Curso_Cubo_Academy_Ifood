// Logica do código:
// Informar quantas vogais tem na palavra "Guilherme"

// O bloco abaixo cria as variáveis.
const palavra = "Guilherme";
let numeroDeVogais = 0;

// O bloco abaixo itera cada letra na palavra.
for (const letra of palavra) {
    // Verifica se a letras são uma vogal minúscula.
    if (letra === "a") { numeroDeVogais += 1; }
    if (letra === "e") { numeroDeVogais += 1; }
    if (letra === "i") { numeroDeVogais += 1; }
    if (letra === "o") { numeroDeVogais += 1; }
    if (letra === "u") { numeroDeVogais += 1; }
}
console.log (numeroDeVogais); // Exibe o total de vogais na palavra.
