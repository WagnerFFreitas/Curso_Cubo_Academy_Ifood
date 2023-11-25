//Calcula o rendimento de uma conta
const deposito = 500;
const objetivo = 100000;
const rendimentoanual = 0.1;
let conta=0;
let meses=0;
//Todo ano ela rende 10%
//Todo mês fazer um deposito
//Quantos meses demora para chegar a 100.000
while (conta<objetivo){
    conta+=deposito;
    conta+=conta*rendimentoanual/12;
    meses+=1;
}
console.log ("Demorou", meses, "meses");
console.log ("Demorou", meses/12,"anos");