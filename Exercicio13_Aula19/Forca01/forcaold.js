const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var palavras = ["javascript", "html", "css", "programacao", "desenvolvimento"];
var palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];

var tentativas = 6;
var letrasCorretas = [];
var letrasIncorretas = [];

function verificarLetra(letra) {
  if (!letra.match(/^[a-z]$/)) {
    console.log("Por favor, insira uma letra válida.");
    return;
  }
  
  if (palavraSelecionada.includes(letra)) {
    letrasCorretas.push(letra);
  } else {
    letrasIncorretas.push(letra);
    tentativas--;
  }
}

function exibirEstadoJogo() {
  var estadoAtual = "";
  for (var i = 0; i < palavraSelecionada.length; i++) {
    if (letrasCorretas.includes(palavraSelecionada[i])) {
      estadoAtual += palavraSelecionada[i];
    } else {
      estadoAtual += "_";
    }
    estadoAtual += " ";
  }
  
  console.log("Estado atual: " + estadoAtual);
  console.log("Tentativas restantes: " + tentativas);
  console.log("Letras incorretas: " + letrasIncorretas.join(", "));
}

function verificarVitoria() {
  return palavraSelecionada.split('').every(function(letra) {
    return letrasCorretas.includes(letra);
  });
}

function jogarForca() {
  rl.question("Digite uma letra: ", function(letra) {
    letra = letra.toLowerCase();
    verificarLetra(letra);

    if (tentativas > 0 && !verificarVitoria()) {
      exibirEstadoJogo();
      jogarForca();
    } else {
      if (verificarVitoria()) {
        console.log("Parabéns! Você venceu o jogo!");
      } else {
        console.log("Fim de jogo. Você perdeu!");
        console.log("A palavra correta era: " + palavraSelecionada);
      }
      rl.close();
    }
  });
}

jogarForca();
