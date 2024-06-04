// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


let finalPrice;

// richiesta numero di km da percorrere
let askKm = parseInt(prompt("inserisci quanti km vuoi percorrere"));

console.log(askKm);

// richiesta età utente
let askAge = parseInt(prompt("inserisci la tua età"));

console.log(askAge);

// calcolo prezzo in funzione dei km (0.21 €/km)
let firstPrice = askKm * 0.21;

console.log(firstPrice);


// applicazione sconto in funzione dell'età

if (askAge < 18) { // se minorenne sconto 20%

    finalPrice = firstPrice - (firstPrice * 0.20);
    console.log(finalPrice);

} else if (askAge > 65) { // se over 65 sconto 40%

    finalPrice = firstPrice - (firstPrice * 0.40);
    console.log(finalPrice);

} else { // altrimenti prezzo normale
    finalPrice = firstPrice;
}

    
// aggiustamento prezzo finale con massimo due decimali 

let refinedPrice = finalPrice.toFixed(2);


// output prezzo finale arrotondato

console.log(refinedPrice);

document.getElementById("prezzo").innerHTML = refinedPrice;