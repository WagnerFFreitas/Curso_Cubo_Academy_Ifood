// Este código só funciona dentro da plataforma da Cubos Academy.

function solucao (vida, classe) {
  let novavida = 0

  if (classe === 1) {
      novavida = vida - 20
    } else if (classe === 2) {
      novavida = vida - 30
    } else if (classe === 3) {
    novavida = vida - 40
    } else {
    novavida = vida - 50
    }
  
  if (novavida <= 0) {
    console.log ("PERDEU")
  } else {
  console.log (novavida)
  }
}