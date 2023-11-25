function solucao(olhosNasLaterais) {
  if (olhosNasLaterais) return true;
  else return false;
}
console.log("O animal 1: " + (solucao(true) ? "PRESA" : "PREDADOR"));
console.log("O animal 2: " + (solucao(false) ? "PRESA" : "PREDADOR"));
function solucao(olhosNasLaterais) {
  if (olhosNasLaterais) {
  return "PRESA";
  } else {
  return "PREDADOR";
  }
}
console.log(solucao(true)); // Saída: PRESA
console.log(solucao(false)); // Saída: PREDADOR