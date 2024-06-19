var palavraselecionada; // Variável que armazena a palavra selecionada para o jogo.
var tentativas = 10; // Quantidade de tentativas do jogo da forca.
var letrascorretas = []; // Letras corretas já digitadas.
var letrasincorretas = []; // Letras incorretas já digitadas.

// Função para carregar as palavras do arquivo JSON e iniciar o jogo
function iniciarJogo() {
  fetch('palavras.json')
    .then(response => response.json())
    .then(data => {
      var palavras = data.palavras;
      palavraselecionada = palavras[Math.floor(Math.random() * palavras.length)];
      exibirestadojogo();
    });
}

// Função para verificar se a letra está correta e atualizar o jogo
function verificarletra() {
  var inputElement = document.getElementById('entrada-letra');
  var letra = inputElement.value.toLowerCase();
  
  if (!letra.match(/^[a-zà-ú]$/)) { 
    alert("Por favor, insira uma letra válida.");
    return;
  }

  if (letrascorretas.includes(letra) || letrasincorretas.includes(letra)) {
    alert("Você já tentou essa letra. Tente outra.");
    return;
  }
  
  if (palavraselecionada.includes(letra)) {
    letrascorretas.push(letra);
  } else {
    letrasincorretas.push(letra);
    tentativas--;
    exibirenforcado();
  }
  
  exibirestadojogo();

  if (tentativas > 0 && !verificarvitoria()) {
    inputElement.value = "";
  } else {
    if (verificarvitoria()) {
      alert("Parabéns! Você venceu o jogo!");
    } else {
      alert("Fim de jogo. Você perdeu!\nA palavra correta era: " + palavraselecionada);
    }
    inputElement.disabled = true;
  }
}

// Função para exibir as partes do enforcado
function exibirenforcado() {
  var partesEnforcado = ["cabeca", "tronco", "braco-direito", "braco-direito-dedo1", "braco-direito-dedo2", "braco-direito-dedo3", "braco-direito-dedo4", "braco-esquerdo", "perna-direita", "perna-esquerda"];
  var pessoaEnforcadaElement = document.getElementById('pessoa-enforcada');

  pessoaEnforcadaElement.innerHTML = "";

  partesEnforcado.slice(0, partesEnforcado.length - tentativas).forEach(function(parte) {
    var parteElement = document.createElement('div');
    parteElement.classList.add(parte);
    pessoaEnforcadaElement.appendChild(parteElement);
  });
}

// Função para exibir o estado atual do jogo
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

  document.getElementById('estado-jogo').innerHTML = "Estado atual: " + estadoatual;
  document.getElementById('tentativas-restantes').innerHTML = "Tentativas restantes: " + tentativas;
  document.getElementById('letras-incorretas').innerHTML = "Letras incorretas: " + letrasincorretas.join(", ");
}

// Função para verificar se o jogador venceu o jogo
function verificarvitoria() {
  return palavraselecionada.split('').every(function(letra) {
    return letrascorretas.includes(letra);
  });
}

iniciarJogo();
