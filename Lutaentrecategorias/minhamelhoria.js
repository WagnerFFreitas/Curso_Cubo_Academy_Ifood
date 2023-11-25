function solucao(peso1, peso2) {
    const categoria1 = pesoParaCategoria(peso1);
    const categoria2 = pesoParaCategoria(peso2);
    return categoria1 === categoria2 ? "PODEM LUTAR" : "NAO PODEM LUTAR";
}
function pesoParaCategoria(peso) {
    if (peso < 55) return "pesoleve";
    if (peso < 65) return "pesommedio";
    if (peso < 75) return "pesomedio";
    if (peso < 85) return "pesompesado";
    return "pesopesado";
}
// Solução
console.log(solucao(60, 64)); // PODEM LUTAR
console.log(solucao(55, 54)); // NAO PODEM LUTAR
