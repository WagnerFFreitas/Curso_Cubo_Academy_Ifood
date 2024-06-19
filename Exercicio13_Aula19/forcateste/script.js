const word = "EXEMPLO"; // Palavra a ser adivinhada
let guessedLetters = [];
let remainingGuesses = 6; // Número de tentativas

function updateHangman() {
const hangman = document.getElementById('hangman');
  hangman.innerHTML = ''; // Limpa o conteúdo anterior

// Desenha o boneco de acordo com o número de tentativas restantes
if (remainingGuesses < 6) hangman.innerHTML += '🤳'; // Mão
if (remainingGuesses < 5) hangman.innerHTML += '🤚'; // Outra mão
if (remainingGuesses < 4) hangman.innerHTML += '👞'; // Calçado
// Continue adicionando partes conforme a lógica do jogo

// Atualiza o número de tentativas restantes
const guessesEl = document.getElementById('guesses');
guessesEl.innerHTML = Tentativas restantes: ${remainingGuesses};
}

function updateWord() {
const wordEl = document.getElementById('word');
wordEl.innerHTML = ''; // Limpa o conteúdo anterior

// Mostra a palavra com as letras já descobertas
for (let i = 0; i < word.length; i++) {
if (guessedLetters.includes(word[i])) {
wordEl.innerHTML += ` ${word[i]} `;
    } else {
    wordEl.innerHTML += ' _ ';
    }
}
}

function setupKeyboard() {
const keyboard = document.getElementById('keyboard');
keyboard.innerHTML = ''; // Limpa o conteúdo anterior

// Cria as teclas do teclado
for (let i = 65; i <= 90; i++) { // Letras de A a Z
 const letter = String.fromCharCode(i);
    const key = document.createElement('div');
    key.textContent = letter;
    key.className = 'key';
    key.addEventListener('click', () => {
      guessLetter(letter);
    });
    keyboard.appendChild(key);
  }
}

function guessLetter(letter) {
  if (!guessedLetters.includes(letter)) {
    guessedLetters.push(letter);

    if (!word.includes(letter)) {
      remainingGuesses--;
    }

    updateHangman();
    updateWord();
  }

  // Verifica se o jogador venceu ou perdeu
  if (remainingGuesses === 0) {
    alert('Você perdeu! A palavra era: ' + word);
  } else if (!word.split('').some(l => !guessedLetters.includes(l))) {
    alert('Parabéns, você ganhou!');
  }
}

// Inicializa o jogo
updateHangman();
updateWord();
setupKeyboard();

// ... (restante do código)

function guessLetter(letter) {
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
  
      if (!word.includes(letter)) {
        remainingGuesses--;
      }
  
      updateHangman();
      updateWord();
  
      // Verifica se o jogador venceu ou perdeu
      if (remainingGuesses === 0) {
        alert('Você perdeu! A palavra era: ' + word);
        // Você pode querer resetar o jogo aqui ou fazer outra coisa
      } else if (checkWin()) {
        alert('Parabéns, você ganhou!');
        // Você pode querer resetar o jogo aqui ou fazer outra coisa
      }
    }
  }
  
  function checkWin() {
    // Verifica se todas as letras da palavra foram adivinhadas
    for (let i = 0; i < word.length; i++) {
      if (!guessedLetters.includes(word[i])) {
        return false; // Se alguma letra não foi adivinhada, retorna falso
      }
    }
    return true; // Se todas as letras foram adivinhadas, retorna verdadeiro
  }
  
  // ... (restante do código)