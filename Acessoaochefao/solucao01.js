function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    if (
    itensColetados.includes(itemNecessario1) &&
    itensColetados.includes(itemNecessario2) &&
    itensColetados.includes(itemNecessario3)
    ) {
    return "PODE ENFRENTAR";
    } else {
    return "NAO PODE ENFRENTAR";
    }
}
// Solucao
const itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"];
const itemNecessario1 = "machado";
const itemNecessario2 = "espada";
const itemNecessario3 = "sapato";
const resultado = solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3);
console.log(resultado);