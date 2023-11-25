// Informa quantas vogais minusculas e ou maiúsculas em uma palavra
// para isso e necessário Informa no código as vogais 
// maiúsculas e minúsculas, pois os computadores fazem
// diferença.
const palavra = "Abacate";
let numeroDeVogais = 0;
for (const letra of palavra) {
// console. Log (Letra);
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
console.log(numeroDeVogais);
