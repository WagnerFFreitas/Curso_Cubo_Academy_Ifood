// Logica do código:
// Calcula o rendimento de uma conta
// Todo ano ela rende 10%
// Todo mês fazer um deposito
// Quantos meses demora para chegar a 100.000

// Bloco abaixo cria as variáveis.
const deposito = 500;
const objetivo = 100000;
const rendimentoanual = 0.1;
let conta=0;
let meses=0;

// O bloco abaixo efetua um loop enquanto o saldo na conta não atingir o objetivo.
while (conta<objetivo){
    conta+=deposito;
    conta+=conta*rendimentoanual/12;
    meses+=1;
}
console.log ("Demorou", meses, "meses");
console.log ("Demorou", meses/12,"anos");