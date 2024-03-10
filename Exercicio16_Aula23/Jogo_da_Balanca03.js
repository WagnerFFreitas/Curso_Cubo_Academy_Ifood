//Logica do jogo da balança
// pesoLadoA1 = 10
// pesoladoA2 = 5
// pesoLadoB1 = 20
// pesoLadoB2 = 10
// Se a soma do lado A soma do lado B -> inclinado para o lado A
// Se não, soma do lado B > soma do lado A -> inclinado para o lado
// Caso contrário -> equilíbrio

// A linha abaixo cria uma função que compara pesos em dois lados (A e B)
function solucao(pesoladoA1, pesoladoA2, pesoladoB1, pesoladoB2) {
  
// A linha abaixo calcula a soma dos pesos do lado A
  const somaladoA = pesoladoA1 + pesoladoA2;

  // A linha abaixo calcula a soma dos pesos do lado B
  const somaladoB = pesoladoB1 + pesoladoB2;

  // A linha abaixo verifica se o lado A tem um peso maior que o lado B
  if (somaladoA > somaladoB) {
    console.log("LADO A");
  } 
  
  // A linha abaixo informa se o lado B tem um peso maior que o lado A
  else if (somaladoB > somaladoA) {
    console.log("LADO B");
  }
 
  // A linha abaixo se os pesos em ambos os lados são iguais
  else {
    console.log("EQUILÍBRIO");
  }
}
