var palavraselecionada; // Variável que armazena a palavra selecionada para o jogo.
var tentativas = 6 // Quantidade de tentativas do jogo da forca.
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
  var partesEnforcado = ["cabeca", "tronco", "braco-esquerdo", "braco-direito", "perna-esquerda", "perna-direita"];
  var pessoaEnforcadaElement = document.getElementById('pessoa-enforcada');
  var partesAdicionais = {
    "braco-esquerdo": ["braco-esquerdo-dedo1", "braco-esquerdo-dedo2", "braco-esquerdo-dedo3", "braco-esquerdo-dedo4", "braco-esquerdo-dedo5"],
    "braco-direito": ["braco-direito-dedo1", "braco-direito-dedo2", "braco-direito-dedo3", "braco-direito-dedo4", "braco-direito-dedo5"], "perna-esquerda": ["perna-esquerda-sapato"],"perna-direita": ["perna-direito-sapato"], "cabeca": ["cabeca-olho-esquerdo", "cabeca-olho-direito", "nariz", "cabeca-orelha-esquerda", "cabeca-orelha-direita", "cabelo", "boca"]
  };
 
  pessoaEnforcadaElement.innerHTML = "";

  partesEnforcado.slice(0, partesEnforcado.length - tentativas).forEach(function(parte) {
    var parteElement = document.createElement('div');
    parteElement.classList.add(parte);
    pessoaEnforcadaElement.appendChild(parteElement);

   // Verificar se há partes adicionais associadas a esta parte e exibi-las também
    if (partesAdicionais[parte]) {
    partesAdicionais[parte].forEach(function(parteAdicional) {
        var parteAdicionalElement = document.createElement('div');
        parteAdicionalElement.classList.add(parteAdicional);
        pessoaEnforcadaElement.appendChild(parteAdicionalElement);
      });
    }
  })
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
