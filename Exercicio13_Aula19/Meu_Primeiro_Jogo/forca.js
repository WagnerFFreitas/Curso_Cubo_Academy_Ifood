// Criação da variável que contem as palavras do jogo da forca
var palavras = ["javascript", "html", "css", "programação", "desenvolvimento"];
// Criação da variável que escolhe a palavra do jogo da forca
var palavraselecionada = palavras[Math.floor(Math.random() * palavras.length)];
// Criação da variável que contem a quantidade de tentativas do jogo da forca
var tentativas = 6;
// Criação da varável que armazena as letras corretas e incorretas do jogo da forca
var letrascorretas = [];
var letrasincorretas = [];

// Criação da função que e chamada quando o jogador tenta uma letra do jogo da forca
function verificarletra() {
  var inputElement = document.getElementById('entrada-letra');
  var letra = inputElement.value.toLowerCase();

  // Este bloco verifica se a letra digitada e valida no jogo da forca
  if (!letra.match(/^[a-z]$/)) {
    alert("Por favor, insira uma letra válida.");
    return;
  }
  
  // Este bloco verifica se a letra já foi usada no jogo da forca
  if (letrascorretas.includes(letra) || letrasincorretas.includes(letra)) {
    alert("Você já tentou essa letra. Tente outra.");
    return;
    }

  // Este bloco verifica se a letra esta na palavra do jogo da forca
  if (palavraselecionada.includes(letra)) {
    letrascorretas.push(letra);
  } else {
    // Este bloco verifica se a letra esta incorreta, diminuindo as tentativas e exibe a parte do enforcado do jogo da forca
    letrasincorretas.push(letra);
    tentativas--;
  }

  // A linha abaixo atualiza o jogo da forca
  exibirestadojogo();

  // Este bloco verifica se o jogador venceu ou perdeu no jogo da forca
  if (tentativas > 0 && !verificarvitoria()) {
    inputElement.value = "";
  } else {
    if (verificarvitoria()) {
      alert("Parabéns! Você venceu o jogo!");
    } else {
      alert("Fim de jogo. Você perdeu!\nA palavra correta era: " + palavraselecionada);
    }

    // A linha abaixo desabilita a entrada de letra após o fim do jogo da forca
    inputElement.disabled = true;
  }
}

// Criação de uma função para exibir o estado atual do jogo da forca
function exibirestadojogo() {
  var estadoatual = "";
  for (var i = 0; i < palavraselecionada.length; i++) {
    if (letrascorretas.includes(palavraselecionada[i])) {
      estadoatual += palavraselecionada[i];
    } else {
      estadoatual += "_";
    }
    estadoatual += " ";
  }

  // Este bloco atualiza os elementos do arquivo index.html com o estado atual do jogo da forca
  document.getElementById('estado-jogo').innerHTML = "Estado atual: " + estadoatual;
  document.getElementById('tentativas-restantes').innerHTML = "Tentativas restantes: " + tentativas;
  document.getElementById('letras-incorretas').innerHTML = "Letras incorretas: " + letrasincorretas.join(", ");
}

// Criação da função para verificar se o jogador venceu do jogo da forca
function verificarvitoria() {
  return palavraselecionada.split('').every(function(letra) {
    return letrascorretas.includes(letra);
  });
}

// A linha abaixo inicia a exibição do jogo da forca
exibirestadojogo();
