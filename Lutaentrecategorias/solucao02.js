function solucao(pesos) {
    const diferencaPeso = Math.abs(pesos[0] - pesos[1]);
    if (diferencaPeso <= 5) {
        return "PODEM LUTAR";
    } else {
        return "NAO PODEM LUTAR";
    }
}
// Soluczo
var pesos = [50, 53];
var resultado = solucao(pesos);
console.log(resultado);
