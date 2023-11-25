function solucao(altitude) {
    const TROPOSFERA_ALTITUDE = 20;
    const ESTRATOSFERA_ALTITUDE = 50;
    const MESOSFERA_ALTITUDE = 80;
    const TERMOSFERA_ALTITUDE = 450;
    
    if (altitude <= TROPOSFERA_ALTITUDE) {
        return "TROPOSFERA: A camada mais próxima da superfície terrestre, onde os seres vivos podem respirar normalmente.";
    } else if (altitude <= ESTRATOSFERA_ALTITUDE) {
        return "ESTRATOSFERA: Uma camada acima da troposfera, que se estende até 50 km do solo.";
    } else if (altitude <= MESOSFERA_ALTITUDE) {
        return "MESOSFERA: O topo da mesosfera fica a 80 km do solo.";
    } else if (altitude <= TERMOSFERA_ALTITUDE) {
        return "TERMOSFERA: O topo da termosfera fica a 450 km acima da Terra.";
    } else {
        return "EXOSFERA: A camada superior da atmosfera, localizada a 900 km acima da Terra.";
    }
}
// solucao
var altitude = 85;
var camada = solucao(altitude);
console.log(camada);





