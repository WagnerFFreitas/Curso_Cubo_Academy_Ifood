
// Logica do código.

// Classe 1: inimigos que tiram 20 pontos de vida;
// Classe 2: inimigos que tiram 30 pontos de vida;
// Classe 3: inimigos que tiram 40 pontos de vida;
// Classe 4: inimigos que tiram 50 pontos de vida.
// vida = 40
// classe = 2
// Se a classe for 1 -> substrair 20 da vida -> verificar se
// é menor ou igual a zero
// Se não, a classe for 1-> substrair 20 da vida -> verificar se
// é menor ou igual a zero

let classe = 3;
let vida = 80;
let novavida = 0;
  
if (classe === 1) {
    novavida = vida - 20
    if (novavida <= 0) {
    console.log ("PERDEU")
  } else {
    console.log (novavida)
  }
} else if (classe === 2) {
  novavida = vida - 30
  if (novavida <= 0) {
  console.log ("PERDEU")
  } else {
  console.log (novavida)
  }
} else if (classe === 3) {
  novavida = vida - 40
  if (novavida <= 0) {
  console.log ("PERDEU")
  } else {
  console.log (novavida)
  }
} else {
  novavida = vida - 50
  if (novavida <= 0) {
    console.log ("PERDEU")
  } else {
    console.log (novavida)
  }
}