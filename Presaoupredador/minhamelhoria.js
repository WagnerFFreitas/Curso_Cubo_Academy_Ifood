//Minha versão do exercicio de forma melhorada
const PRESA = true;
const PREDADOR = false;

function solucao(olhosNasLaterais) {
  return olhosNasLaterais ? "PRESA" : "PREDADOR";
}
console.log("O animal 1: " + (solucao(PRESA)));
console.log("O animal 2: " + (solucao(PREDADOR)));
console.log(solucao(PRESA));    // Saída: PRESA
console.log(solucao(PREDADOR)); // Saída: PREDADOR
