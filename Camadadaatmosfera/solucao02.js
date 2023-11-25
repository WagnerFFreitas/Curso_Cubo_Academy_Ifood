function verificarCamadaAtmosfera(altitude) {
    if (altitude <= 20) {
    return "TROPOSFERA: A camada mais próxima da superfície terrestre, onde os seres vivos podem respirar normalmente.";
    } else if (altitude <= 50) {
    return "ESTRATOSFERA: Uma camada acima da troposfera, que se estende até 50 km do solo.";
    } else if (altitude <= 80) {
    return "MESOSFERA: O topo da mesosfera fica a 80 km do solo.";
    } else if (altitude <= 450) {
    return "TERMOSFERA: O topo da termosfera fica a 450 km acima da Terra.";
    } else {
    return "EXOSFERA: A camada superior da atmosfera, localizada a 900 km acima da Terra.";
    }
}

// solucao
var altitude = 85;
var camada = verificarCamadaAtmosfera(altitude);
console.log(camada);