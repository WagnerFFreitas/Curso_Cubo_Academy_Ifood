function enfrentarOChefao(itensColetados, ...itensNecessarios) {
    const possuiTodosItens = itensNecessarios.every(item => itensColetados.includes(item));
    return possuiTodosItens ? "PODE ENFRENTAR" : "NAO PODE ENFRENTAR";
}

// Solução
var itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"];
var itemNecessario1 = "machado";
var itemNecessario2 = "espada";
var itemNecessario3 = "sapato";
var resultado = enfrentarOChefao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3);
console.log(resultado);
