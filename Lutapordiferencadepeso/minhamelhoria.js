function solucao(peso1, peso2) {
    const dentroDaFaixa = (peso) => peso >= 55 && peso < 85;

    if (dentroDaFaixa(peso1) && dentroDaFaixa(peso2)) {
        return "PODEM LUTAR";
    } else if ((peso1 < 55) !== (peso2 < 55)) {
        return "NAO PODEM LUTAR";
    } else {
        return "NAO PODEM LUTAR";
    }
}

// Solução
console.log(solucao(60, 64)); // PODEM LUTAR
console.log(solucao(55, 54)); // NAO PODEM LUTAR