function solucao(pesos) {
    const diferenca = Math.abs(pesos[0] - pesos[1]);
    if (diferenca <= 5) {
    return "PODEM LUTAR";
    } else {
    return "NAO PODEM LUTAR";
    }
}
// Solucao
const pesos = [50, 53];
const resultado = solucao(pesos);
console.log(resultado); // Saída: PODEM LUTAR 