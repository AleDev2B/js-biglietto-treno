// Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.

// chiedere all0utente 1 la sua età
var UserAge1 = prompt("Ciao Frenzo!! vuoi fare soldi facili, inserisci la tua età e tenta la fortuna")
// chiedere all'utente 2 la sua età
var UserAge2 = prompt("Ciao Gianfranzo!! vuoi una scorta gratis di monetine a vita, inserisci la tua età e tenta la fortuna")

// And the winner is
if (UserAge1 < UserAge2) {
    document.writeln(UserAge2)
} else if (UserAge1 > UserAge2) {
    document.writeln(UserAge1)
}    
