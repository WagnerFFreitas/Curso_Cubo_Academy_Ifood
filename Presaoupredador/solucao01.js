function solucao(olhosNasLaterais) {
    if (olhosNasLaterais) {
        return "PRESA";
    } else {
        return "PREDADOR";
    }
}
// solucao
var olhosNasLaterais = true;
var animal = solucao(olhosNasLaterais);
console.log(animal);