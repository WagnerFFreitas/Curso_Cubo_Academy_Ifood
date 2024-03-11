8// A logica do programa
// condicionais - IF e Else
// Menores de 18 --> Menor de idade (meia)
// Entre 18 e 60 --> Adultos (meio apenas com carteirinha)
// Maiores de 60 anos --> Idoso (meia)

// Bloco abaixo cria as variáveis.
const idade = 75;
const temcarteirinha = true;

if (idade < 18){
    // Menor de idade
    console.log ("Meia");
} else if (idade <= 60){
    // Adulto
    if (temcarteirinha === true){
        // Adulto tem carteirinha
        console.log ("Meia");
    } else {
        // Adulto sem carteirinha
        console.log ("Inteira");
    }
} else {
    // Idoso
    console.log ("Meia");
}