// Palavra a ser adivinhada
const words = [
  "abacaxi", "respeito", "hospital", "fantasia", "elefante",
  "computador", "estudante", "telefone", "chocolate", "biblioteca",
  "trabalho", "refrigerante", "esqueleto", "respirar", "espaçoso",
  "universo", "extensão", "aventura", "instrumento", "amizade",
  "dinheiro", "importante", "felicidade", "desenho", "vegetariano",
  "coração", "aniversário", "sincero", "bicicleta", "enciclopédia",
  "revolução", "agricultor", "terremoto", "oportunidade", "comunicação",
  "satisfação", "televisão", "montanha", "invenção", "astronomia",
  "companhia", "refrescante", "resplandecer", "divertido", "investigar",
  "observação", "curiosidade", "característica", "desenvolver", "conhecimento"
];

let wordToGuess = "";
let guessedWord = [];
let wrongGuesses = [];
let attemptsLeft = 6;

function chooseRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  wordToGuess = words[randomIndex];
  guessedWord = Array(wordToGuess.length).fill('_');
  updateWordDisplay();
}

function updateWordDisplay() {
  document.getElementById('word-display').textContent = guessedWord.join(' ');
}

function updateLettersGuessed() {
  document.getElementById('letters-guessed').textContent = 'Letras erradas: ' + wrongGuesses.join(', ');
}

function updateAttemptsLeft() {
  document.getElementById('attempts-left').textContent = attemptsLeft;
}

function guessLetter() {
  const guessInput = document.getElementById('guess-input');
  const letter = guessInput.value.toLowerCase();

  if (!letter.match(/[a-z]/)) {
      alert('Por favor, insira uma letra válida.');
      return;
  }

  if (guessedWord.includes(letter) || wrongGuesses.includes(letter)) {
      alert('Você já tentou essa letra.');
      return;
  }

  if (wordToGuess.includes(letter)) {
      for (let i = 0; i < wordToGuess.length; i++) {
          if (wordToGuess[i] === letter) {
              guessedWord[i] = letter;
          }
      }
      updateWordDisplay();
  } else {
      wrongGuesses.push(letter);
      updateLettersGuessed();
      attemptsLeft--;
      updateAttemptsLeft();
      updateHangmanImage();
  }

  guessInput.value = '';

  if (guessedWord.join('') === wordToGuess) {
      alert('Parabéns! Você ganhou!');
      resetGame();
  } else if (attemptsLeft === 0) {
      alert('Você perdeu. A palavra correta era: ' + wordToGuess);
      resetGame();
  }
}

function updateHangmanImage() {
  const hangmanImage = document.getElementById('hangman').querySelector('img');
  const imageIndex = 6 - attemptsLeft;
  hangmanImage.src = `images/hangman-${imageIndex}.png`;
}

function resetGame() {
  chooseRandomWord();
  wrongGuesses = [];
  attemptsLeft = 6;
  updateWordDisplay();
  updateLettersGuessed();
  updateAttemptsLeft();
  updateHangmanImage();
}

chooseRandomWord();
updateAttemptsLeft();
