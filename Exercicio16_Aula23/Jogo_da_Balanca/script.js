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
    // Atualizar visualização da balança com base no resultado
    const balancaElement = document.getElementById('balanca');
    if (somaladoA > somaladoB) {
    balancaElement.classList.remove('equilibrio');
    balancaElement.classList.add('inclina-esquerda');
    } else if (somaladoB > somaladoA) {
    balancaElement.classList.remove('equilibrio');
    balancaElement.classList.add('inclina-direita');
    } else {
    balancaElement.classList.remove('inclina-esquerda', 'inclina-direita');
    balancaElement.classList.add('equilibrio');
    }
}