function verificarBalanca() {
    // Obter valores dos pesos informados pelo usuário
    const pesoA1 = parseFloat(document.getElementById('pesoA1').value) || 0;
    const pesoA2 = parseFloat(document.getElementById('pesoA2').value) || 0;
    const pesoB1 = parseFloat(document.getElementById('pesoB1').value) || 0;
    const pesoB2 = parseFloat(document.getElementById('pesoB2').value) || 0;
  
    // Calcular as somas dos pesos em ambos os lados
    const somaladoA = pesoA1 + pesoA2;
    const somaladoB = pesoB1 + pesoB2;
  
    // Verificar e exibir o resultado
    const resultadoElement = document.getElementById('resultado');
    if (somaladoA > somaladoB) {
      resultadoElement.textContent = "A balança inclinará para o LADO A";
    } else if (somaladoB > somaladoA) {
      resultadoElement.textContent = "A balança inclinará para o LADO B";
    } else {
      resultadoElement.textContent = "A balança está em EQUILÍBRIO";
    }
  }
  