var palavras = ["javascript", "html", "css", "programação", "desenvolvimento"];
var palavraselecionada = palavras[Math.floor(Math.random() * palavras.length)];
var tentativas = 6;
var letrascorretas = [];
var letrasincorretas = [];

function verificarletra() {
  var inputElement = document.getElementById('entrada-letra');
  var letra = inputElement.value.toLowerCase();

  if (!letra.match(/^[a-z]$/)) {
    alert("Por favor, insira uma letra válida.");
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

function exibirenforcado() {
  var partesEnforcado = ["cabeca", "tronco", "braco-direito", "braco-esquerdo", "perna-direita", "perna-esquerda"];
  var pessoaEnforcadaElement = document.getElementById('pessoa-enforcada');

  pessoaEnforcadaElement.innerHTML = "";
  //A linha acima limpa as partes do enforcado anteriores

  // A partir daqui sao as classes correspondentes às partes enforcadas
  partesEnforcado.slice(0, partesEnforcado.length - tentativas).forEach(function (parte) {
    var parteElement = document.createElement('div');
    parteElement.classList.add(parte);
    pessoaEnforcadaElement.appendChild(parteElement);
  });
}

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

function verificarvitoria() {
  return palavraselecionada.split('').every(function(letra) {
    return letrascorretas.includes(letra);
  });
}

exibirestadojogo();
