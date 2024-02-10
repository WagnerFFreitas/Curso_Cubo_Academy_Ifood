# Exercicio13_Aula20
Aula 20_Logica de programação da IFood_Cubo Academy

Vamos traduzir a lógica do código JavaScript para uma descrição em português de um possível algoritmo:

1. **Carregamento das Palavras:**
   - Crie uma função chamada `carregarPalavras`.
   - Dentro da função, faça uma requisição assíncrona para o arquivo `palavras.txt`.
   - Ao obter o conteúdo, divida-o em linhas e remova palavras em branco.
   - Retorne a lista de palavras carregadas.

2. **Inicialização do Jogo:**
   - Crie uma função chamada `iniciarJogo`.
   - Chame a função `carregarPalavras` para obter a lista de palavras.
   - Escolha aleatoriamente uma palavra da lista.
   - Inicialize variáveis para armazenar a palavra a ser adivinhada, as letras adivinhadas, o número de tentativas incorretas e as letras já utilizadas.

3. **Exibição da Palavra, do Boneco e das Letras Utilizadas:**
   - Crie três funções: `exibirPalavra`, `exibirBoneco` e `exibirLetrasUtilizadas`.
   - `exibirPalavra` atualiza visualmente a palavra a ser adivinhada.
   - `exibirBoneco` exibe a imagem do jogo da forca correspondente ao número de tentativas incorretas.
   - `exibirLetrasUtilizadas` mostra as letras já utilizadas.

4. **Verificação da Tentativa:**
   - Crie uma função chamada `verificarTentativa` que aceita a letra da tentativa como parâmetro.
   - Verifique se a letra já foi utilizada, exibindo uma mensagem caso positivo.
   - Adicione a letra à lista de letras utilizadas.
   - Se a letra estiver na palavra, atualize a palavra adivinhada.
   - Caso contrário, incremente o número de tentativas incorretas.
   - Chame as funções de exibição após cada tentativa.
   - Verifique se o jogador ganhou ou perdeu o jogo.

5. **Interface de Usuário:**
   - Crie uma interface simples com HTML, incluindo áreas para exibir a palavra, a imagem do jogo da forca e as letras utilizadas.
   - Adicione um botão "Novo Jogo" que chama a função `iniciarJogo` quando clicado.

Este é um resumo em linguagem de algoritmo da lógica do jogo da forca. Note que a implementação pode variar dependendo da linguagem de programação escolhida, mas a estrutura geral permanece similar.
