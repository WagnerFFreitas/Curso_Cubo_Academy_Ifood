function solucao (palpite, palavra ){
    let quantidade = 0;
    for (const letra of palavra) {
        if (letra === palpite) {
            //Marcar +1
            quantidade += 1;
        }
    }
    console.log(quantidade);
}
function naoMexer(input) {
const palpite = input.split(' ')[0];
const palavra = input.split(' ')[1];
solucao(palpite, palavra);
}
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
naoMexer(input);
