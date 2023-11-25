function solucao(peso1, peso2) {
    if ((peso1 < 55 || peso2 < 55) && (peso1 >= 55 || peso2 >= 55)) {
      return "NAO PODEM LUTAR";
    } else if ((peso1 >= 55 && peso1 < 65) && (peso2 >= 55 && peso2 < 65)) {
      return "PODEM LUTAR";
    } else if ((peso1 >= 65 && peso1 < 75) && (peso2 >= 65 && peso2 < 75)) {
      return "PODEM LUTAR";
    } else if ((peso1 >= 75 && peso1 < 85) && (peso2 >= 75 && peso2 < 85)) {
      return "PODEM LUTAR";
    } else if (peso1 >= 85 && peso2 >= 85) {
      return "PODEM LUTAR";
    } else {
      return "NAO PODEM LUTAR";
    }
}
  // Exemplo de uso
var peso1 = 60;
var peso2 = 64;
var resultado = solucao(peso1, peso2);
console.log(resultado);
var peso1 = 55;
var peso2 = 54;
var resultado = solucao(peso1, peso2);
console.log(resultado);
