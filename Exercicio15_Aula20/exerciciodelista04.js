//Lista tambem conhecida como Array
const lista = [1, 2, "Olá", 4];
// O valor da variável LISTA é 1, 2, Olá e 4.
console.log(lista)
//Foi criado uma variável elemento para ser 
//utilizada dentro da condição FOR para que
//seja informa quais tipos elemento tem dentro da 
//variável lista utilizada o TYPEOF
for (const elemento of lista){
  console.log(typeof elemento);
}
