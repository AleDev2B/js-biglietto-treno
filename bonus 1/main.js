// Quanti minuti mancano alla fine dell’ora?  (quindi script che quando aggiorno la pagina mi dice quanti minuti mancano);

// inserire funzione che recupera l'ora attuale
var d = new Date();

 //calcolare i minuti che mancano alla fine dell'ora
var minRemain = 60 - d.getMinutes()

 // visualizzare il risultato in pagina
document.getElementById("demo").innerHTML = minRemain;
