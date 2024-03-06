


// pesoladoB2 = 18
// Se a soma do lado A soma do lado B -> inclinado para o lado A
// Se não, soma do lado B > soma do lado A -> inclinado para o lado
// Caso contrário -> equilíbrio

const pesoladoA1 = 10;
const pesoladoA2 = 5;
const pesoladoB1 = 20;
const pesoladoB2 = 10;
const somaladoA = pesoladoA1 + pesoladoA2;
const somaladoB = pesoladoB1+ pesoladoB2;
if (somaladoA > somaladoB) {
    console.log("LADO A")
    } else if (somaladoB > somaladoA) {
    console.log("LADO B")
    } else {
    console.log("EQUILÍBRIO")
}

function solucao(pesoladoA1, pesoladoA2, pesoladoB1, pesoladoB2) {
  const somaladoA = pesoladoA1 + pesoladoA2;
  const somaladoB = pesoladoB1 + pesoladoB2;

  if (somaladoA > somaladoB) {
    console.log("LADO A");
  } else if (somaladoB > somaladoA) {
    console.log("LADO B");
  } else {
    console.log("EQUILIBRIO");
  }
}

