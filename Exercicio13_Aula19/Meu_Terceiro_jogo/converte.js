const fs = require('fs');

// Lê o arquivo 'palavras.txt'
fs.readFile('d:\\Curso_Cubo_Academy_Ifood\\palavras.txt', 'utf8', function(err, data) {
  if (err) throw err;

  // Divide o conteúdo do arquivo em linhas para criar um array de palavras
  const palavras = data.split('\n');

  // Converte o array em uma string JSON
  const json = JSON.stringify(palavras, null, 2);

  // Escreve a string JSON em um novo arquivo 'palavras.json'
  fs.writeFile('d:\\Curso_Cubo_Academy_Ifood\\palavras.json', json, 'utf8', function(err) {
    if (err) throw err;
    console.log('Arquivo JSON criado com sucesso.');
  });
});