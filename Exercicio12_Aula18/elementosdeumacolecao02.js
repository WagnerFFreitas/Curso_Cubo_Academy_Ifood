//Informa quantas vogais tem na palavra "Guilherme"
const palavra = "Guilherme";
let numeroDeVogais = 0;
for (const letra of palavra) {
    if (letra === "a") { numeroDeVogais += 1; }
    if (letra === "e") { numeroDeVogais += 1; }
    if (letra === "i") { numeroDeVogais += 1; }
    if (letra === "o") { numeroDeVogais += 1; }
    if (letra === "u") { numeroDeVogais += 1; }
}
console.log (numeroDeVogais);
