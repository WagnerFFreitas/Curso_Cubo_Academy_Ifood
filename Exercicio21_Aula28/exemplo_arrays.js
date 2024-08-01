/* Logica do código

// Contar a quantidade de promotores
    // Pegar item por item
    // Ver se esse item deu nota 9 ou 10
    // Se sim, somar na quantidade de promotores
// contar a quantidade de detratores
// Pegar item por item
    // Ver se esse item deu nota 0 ou 6
    // Se sim, somar na quantidade de detratores
// Contas a quantidade de pessoas que foram entrevistas
// Fazer o cálculo

// && e
// || ou
*/

let respostas = [5,10,0,6,10,10,9,8]

let quantidadepromotores = 0
let quantidadedetratores = 0

for (let item of resposta) {
    if (item === 9 || item === 10) {
        quantidadepromotores = quantidadedetrator + 1
    } else if (item >= 0 && item<= 6 ) { 
        quantidadedetratores = quantidadedetratores + 1
    }
}
let quantidadetotal = respostas.length
let nps = (quantidadepromotores - quantidadedetratores) / quantidadetotal * 100
console.log (nps)