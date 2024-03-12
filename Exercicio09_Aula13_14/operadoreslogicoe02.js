// Logica do codigo.
// condicionais - IF e Else
// Menores de 18 --> Menor de idade (meia)
// Entre 18 e 60 --> Adultos (meio apenas com carteirinha)
// Maiores de 60 anos --> Idoso (meia)
// Inteira --> Adulto e não tem carteirinha
// Meia --> O resto

// Bloco abaixo cria as variáveis.
const idade = 75;
const temcarterinha = true;
const ehadulta = idade >= 18 && idade <= 60; // Idade maior ou igual (&& e mesmo que e, sendo ele um operador logico) idade menor ou igual a 60
// const ehadulta = ((idade >= 18) && (idade <= 60)); --> pode ser feito assim também.

if (ehadulta && temcarterianha === false){
// if (ehadulta && !temcarterianha) --> O sibolo ! e o mesmo que NÃO
    console.log ("Interia");
} else {
    console.log ("Meia");
} 