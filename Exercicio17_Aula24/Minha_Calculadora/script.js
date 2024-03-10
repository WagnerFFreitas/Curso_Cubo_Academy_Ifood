function calcular() {
  // Obter valores inseridos
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let operacao = document.getElementById('operation').value;

  // Verificar se os valores são válidos
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').innerHTML = 'Por favor, insira números válidos.';
    return;
  }

  // Realizar a operação selecionada
  let resultado;
  switch (operacao) {
    case 'soma':
      resultado = num1 + num2;
      break;
    case 'subtracao':
      resultado = num1 - num2;
      break;
    case 'multiplicacao':
      resultado = num1 * num2;
      break;
    case 'divisao':
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        document.getElementById('result').innerHTML = 'Não é possível dividir por zero.';
        return;
      }
      break;
    default:
      document.getElementById('result').innerHTML = 'Operação inválida.';
      return;
  }

  document.getElementById('result').innerHTML = 'Resultado: ' + resultado;
}