DESCRIZIONE:
/* chiedere all'utente quanto chilometri deve percorrere ll programma dovrà chiedere all’utente il numero di chilometri
*/
var fasciaKm = prompt("Gentile Viaggiatore ti preghiamo di indicare i Km di distanza dalla tua destinazione");

// memorizzare il risultato e renderlo visibile sullo schermo
document.getElementById('fasciaKm').innerHTML = "La destinazione si trova a:" + fasciaKm + "Km";

/* chiedere all'utente la sua età */
var userAge = prompt("Quanti anni hai?");

// memorizzare il risultato e renderlo visibile sullo schermo
document.getElementById('userAge').innerHTML = "Il cliente ha" + userAge + "anni";

/* calcolare il costo del biglietto in base alla lunghezza del viaggio
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.Il prezzo del biglietto è definito in base ai km (0.21 € al km),*/
var ticket = fasciaKm * 0.21

var cartaVerde = ticket * 0.80

var cartaArgento = fasciaKm * 0.21 * 0.60

/* applicare lo sconto in base alla fascia d'età
 va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.*/
if (userAge <= 18) {
    document.writeln(cartaVerde)
} else if (userAge > 18 && userAge < 65) {
    document.writeln(ticket)
}
else if (userAge >= 65) {
    document.writeln(cartaArgento)
}

// visualizza il costo del biglietto scontato per la fascia d'età
