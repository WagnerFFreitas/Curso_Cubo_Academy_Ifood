function solucao(pesos) {
    const diferenca = Math.abs(pesos[0] - pesos[1]);
    if (diferenca <= 5) {
    return "PODEM LUTAR";
    } else {
    return "NAO PODEM LUTAR";
    }
}
// Solucao
const pesos1 = [50, 53];
const resultado1 = solucao(pesos1);
console.log(resultado1); // Saída: PODEM LUTAR
const pesos2 = [60, 70];
const resultado2 = solucao(pesos2);
console.log(resultado2); // Saída: NAO PODEM LUTAR 