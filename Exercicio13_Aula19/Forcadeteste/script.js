const palavras = ["banana", "carro", "casa", "computador", "livro"];
let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let letrasChutadas = [];
let erros = 0;

const boneco = document.querySelector('.enforcado');
const palavraSecretaElemento = document.querySelector('.palavra-secreta');
const teclado = document.querySelector('.teclado');
const errosContador = document.querySelector('#erros-contador');
const mensagens = document.querySelector('#mensagens');

function desenharPalavraSecreta() {
  palavraSecretaElemento.innerHTML = '';
  for (let i = 0; i < palavraSecreta.length; i++) {
    const letra = palavraSecreta[i].toUpperCase();
    if (letrasChutadas.includes(letra)) {
      palavraSecretaElemento.innerHTML += `<span>${letra}</span>`;
    } else {
      palavraSecretaElemento.innerHTML += '<span>_</span>';
    }
  }
}

function atualizarErros() {
  errosContador.textContent = erros;
  desenharBoneco();
}

function desenharBoneco() {
  switch (erros) {
    case 0:
      boneco.classList.remove('cabeca');
      boneco.classList.remove('tronco');
      boneco.classList.remove('braco-esquerdo');
      boneco.classList.remove('braco-direito');
      boneco.classList.remove('perna-esquerda');
      boneco.classList.remove('perna-direita');
      break;
    case 1:
      boneco.classList.add('cabeca');
      break;
    case 2:
      boneco.classList.add('tronco');
      break;
    case 3:
      boneco.classList.add('braco-esquerdo');
      break;
    case 4:
      boneco.classList.add('braco-direito');
      break;
    case 5:
      boneco.classList.add('perna-esquerda');
      break;
    case 6:
      boneco.classList.add('perna-direita');
      gameOver('Você perdeu!');
      break;
  }
}

function verificarLetra(letra) {
  if (!letrasChutadas.includes(letra)) {
    letrasChutadas.push(letra.toUpperCase());
    const regex = new RegExp(letra, 'g');
    if (!palavraSecreta.match(regex)) {
      erros++;
      atualizarErros();
    }
  }
  desenharPalavraSecreta();
  verificarVitoria();
}

function verificarVitoria() {
  let acertos = 0;
  for (let i = 0; i < palavraSecreta.length; i++) {
    const letra = palavraSecreta[i].toUpperCase();
    if (letrasChutadas.includes(letra)) {
      acertos++;
    }
  }
  if (acertos === palavraSecreta.length) {
    gameOver('Você ganhou!');
  }
}

function gameOver(mensagem) {
  teclado.classList.add('desabilitado');
  mensagens.textContent = mensagem;
}

teclado.addEventListener('click', function(e) {
  const button = e.target;
  if (button.tagName === 'BUTTON' && !button.classList.contains('desabilitado')) {
    const letra = button.dataset.letra;
    button.classList.add('desabilitado');
    verificarLetra(letra);
  }
});

desenharPalavraSecreta();
atualizarErros();
