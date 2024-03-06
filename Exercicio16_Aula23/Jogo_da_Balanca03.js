// pesoLadoA1= 10
// pesoLadoA2= 5
// pesoLadoB1= 20


//Logica do jogo da balança

// pesoLadoA1 = 10
// pesoladoA2 = 5
// pesoLadoB1 = 20
// pesoLadoB2 = 10

// Se a soma do lado A soma do lado B -> inclinado para o lado A
// Se não, soma do lado B > soma do lado A -> inclinado para o lado
// Caso contrário -> equilíbrio

// Função que compara pesos em dois lados (A e B)
function solucao(pesoladoA1, pesoladoA2, pesoladoB1, pesoladoB2) {
  // Calcula a soma dos pesos do lado A
  const somaladoA = pesoladoA1 + pesoladoA2;

  // Calcula a soma dos pesos do lado B
  const somaladoB = pesoladoB1 + pesoladoB2;

  // Verifica se o lado A tem um peso maior que o lado B
  if (somaladoA > somaladoB) {
    console.log("LADO A");
  } 
  // Se o lado B tem um peso maior que o lado A
  else if (somaladoB > somaladoA) {
    console.log("LADO B");
  } 
  // Se os pesos em ambos os lados são iguais
  else {
    console.log("EQUILIBRIO");
  }
}
