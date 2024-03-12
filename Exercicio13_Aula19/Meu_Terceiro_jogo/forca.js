const fs = require('fs');

// Função para ler as palavras do arquivo
function lerPalavrasDoArquivo(caminhoDoArquivo) {
    try {
        const data = fs.readFileSync(caminhoDoArquivo, 'utf8');
        return data.split('\n'); // Divide o conteúdo em linhas para obter uma lista de palavras
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        return [];
    }
}

// Caminho para o arquivo de palavras
const caminhoDoArquivo = 'palavras.txt';

// Lista de palavras do arquivo
const palavras = lerPalavrasDoArquivo(caminhoDoArquivo);

// Seleção aleatória de uma palavra do jogo da forca
const palavraselecionada = palavras[Math.floor(Math.random() * palavras.length)];

console.log('Palavra selecionada:', palavraselecionada);
