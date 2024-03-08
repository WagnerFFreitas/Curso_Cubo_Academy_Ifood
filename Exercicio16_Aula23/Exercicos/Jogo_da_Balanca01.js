//Logica do Jogo da balança
// pesoLadoA1= 10
// pesoLadoA2= 5
// pesoLadoB1= 20
// pesoLadoB2 = 10
// Se a soma do lado A soma do lado B -> inclinado para o lado A
// Se não, soma do lado B > soma do lado A -> inclinado para o lado
// Caso contrário -> equilíbrio I

// O bloco abaixo define os pesos para cada lado
let pesoladoA1 = 10;
let pesoladoA2 = 5;
let pesoladoB1 = 20;
let pesoladoB2 = 10;

// Neste bloco abaixo e criado a as variáveis para calcular a soma dos pesos para cada lado
let somaladoA = pesoladoA1 + pesoladoA2;
let somaladoB = pesoladoB1 + pesoladoB2;

// Neste bloco abaixo e comparado os pesos e determinando o resultado
if (somaladoA > somaladoB) {
    console.log("LADO A");
} else if (somaladoB > somaladoA) {
    console.log("LADO B");
} else {
    console.log("EQUILIBRIO");
}
