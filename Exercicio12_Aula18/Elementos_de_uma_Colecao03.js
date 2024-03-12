// Logica do código:
// Informa quantas vogais minusculas e ou maiúsculas em uma palavra
// para isso e necessário Informa no código as vogais 
// maiúsculas e minúsculas, pois os computadores fazem
// diferença.

// O bloco abaixo cria as variáveis.
const palavra = "Abacate";
let numeroDeVogais = 0;

// O bloco abaixo itera cada letra na palavra.
for (const letra of palavra) {
// Verifica se a letras sao uma vogal minúscula ou máscula.
    if (letra === "a") { numeroDeVogais += 1; }
    if (letra === "e") { numeroDeVogais += 1; }
    if (letra === "i") { numeroDeVogais += 1; }
    if (letra === "o") { numeroDeVogais += 1; }
    if (letra === "u") { numeroDeVogais += 1; }
    if (letra === "A") { numeroDeVogais += 1; }
    if (letra === "E") { numeroDeVogais += 1; }
    if (letra === "I") { numeroDeVogais += 1; }
    if (letra === "O") { numeroDeVogais += 1; }
    if (letra === "U") { numeroDeVogais += 1; }
}
console.log(numeroDeVogais); // Exibe o total de vogais na palavra.
