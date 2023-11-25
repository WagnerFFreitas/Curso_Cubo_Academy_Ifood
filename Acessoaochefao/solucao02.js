function verificarEnfrentarChefao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    const possuiItem1 = itensColetados.includes(itemNecessario1);
    const possuiItem2 = itensColetados.includes(itemNecessario2);
    const possuiItem3 = itensColetados.includes(itemNecessario3);

    if (possuiItem1 && possuiItem2 && possuiItem3) {
        return "PODE ENFRENTAR";
    } else {
        return "NAO PODE ENFRENTAR";
    }
}
// Solucao
var itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"];
var itemNecessario1 = "machado";
var itemNecessario2 = "espada";
var itemNecessario3 = "sapato";
var resultado = verificarEnfrentarChefao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3);
console.log(resultado);