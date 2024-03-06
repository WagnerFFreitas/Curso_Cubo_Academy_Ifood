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
