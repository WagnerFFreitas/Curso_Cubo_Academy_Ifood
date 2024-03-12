// O bloco abaixo cria as variáveis.
var palavras = []; // Criação da variável que contem as palavras do jogo da forca.
var palavraselecionada; // Criação da variável que escolhe a palavra do jogo da forca.
var tentativas = 6; // Criação da variável que contem a quantidade de tentativas do jogo da forca.
var letrascorretas = []; // Criação da varável que armazena as letras corretas do jogo da forca.
var letrasincorretas = []; // Criação da varável que armazena as letras incorretas do jogo da forca.

// Função para carregar as palavras do arquivo
function carregarPalavras() {
  fetch('caminho/para/seu/arquivo.txt')
    .then(response => response.text())
    .then(data => {
      palavras = data.split('\n');
      iniciarJogo();
    });
}

// Função para iniciar o jogo
function iniciarJogo() {
  palavraselecionada = palavras[Math.floor(Math.random() * palavras.length)];
  exibirestadojogo();
}

// ... Restante do seu código ...

carregarPalavras(); // Esta linha inicia a exibição do jogo da forca.
