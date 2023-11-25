function solucao(peso1, peso2) {
    if (Math.abs(peso1 - peso2) <= 10) {
    if (peso1 < 55 || peso2 < 55) {
    return "PODEM LUTAR";
    } else if (peso1 < 65 || peso2 < 65) {
    return "PODEM LUTAR";
    } else if (peso1 < 75 || peso2 < 75) {
    return "PODEM LUTAR";
    } else if (peso1 < 85 || peso2 < 85) {
    return "PODEM LUTAR";
    }
    }
    return "NAO PODEM LUTAR";
}
// Solucao
console.log(solucao(60, 64));  // PODEM LUTAR
console.log(solucao(55, 54));  // NAO PODEM LUTAR