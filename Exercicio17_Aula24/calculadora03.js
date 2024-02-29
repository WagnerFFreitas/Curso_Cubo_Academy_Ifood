// numero1 = 10
// numero2 = 5
// operacao = "soma"
//Verificar se a operacao é uma soma -> numero1 + numero2
//Se não, verificar se é uma subtracao -> numero1- numero2
//Se não, verificar se é uma multiplicacao -> numero1 x numero2
//Se não, verificar se é uma divisao -> numero1 / numero2

let operacao = "multiplicacao"
let numero1 = 10
let numero2 = 5


if (operacao === "soma") {
  console.log(numero1 + numero2)
} else if (operacao === "subtracao") {
  console.log(numero1- numero2)
} else if (operacao === "multiplicacao") {
  console.log(numero1* numero2)
} else if (operacao === "divisao") {
  console.log(numero1/ numero2)
}
