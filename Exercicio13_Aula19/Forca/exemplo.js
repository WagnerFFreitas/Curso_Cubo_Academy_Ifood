function solucao (palpite, palavra) {
let quantidade = 0;
for (const letra of palavra) {
    if (Letra === palpite) {
        quantidade += 1;
    }
}
console. log(quantidade);
}

function naomexer (input) {
    const palpite = input.split(' ')[0];
    const palavra = input.split(' ')[1];
    solucao (palpite, palavra);
}
let input = require('fs').readFilesync('/dev/stdin','utf8');
naomexer (input);