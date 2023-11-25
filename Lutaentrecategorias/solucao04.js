function solucao(peso1, peso2) {
    let categoria1, categoria2;
    categoria1 = pesoParaCategoria(peso1);
    categoria2 = pesoParaCategoria(peso2);
    if (categoria1 === categoria2){
    return "PODEM LUTAR";
    } else {
    return "NAO PODEM LUTAR";
    }
}
function pesoParaCategoria(peso) {
    if (peso < 55){
    return "pesoleve";
    }
    else if (peso < 65){
    return "pesommedio";
    }
    else if (peso < 75){
    return "pesomedio";
    }
    else if (peso < 85){
    return "pesompesado";
    }
    else{
    return "pesopesado";
    }
}