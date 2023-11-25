//Menores de 18 --> Menor de idade (meia)
//Entre 18 e 60 --> Adultos (meio apenas com carteirinha)
//Maiores de 60 anos --> Idoso (meia)
//Meia --> O resto
//Inteira --> Adulto e não tem carteirinha

const idade = 75;
const temcarterinha = true;
const ehadulta = idade >= 18 && idade <= 60;//Idade maior ou igual (&& e mesmo que e, sendo ele um operador logico) idade menor ou igual a 60
//const ehadulta = ((idade >= 18) && (idade <= 60)); --> pode ser feito assim também.
if (idade < 18 || idade > 60 || (ehAdulta && temcarterinha)){
//So vai entrar no else se todas as condições acima for falsas
    console.log("Meia");
} else {
    console.log("Inteira");
} 