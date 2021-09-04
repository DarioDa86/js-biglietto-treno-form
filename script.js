// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). 


// 1- dichiaro le variabili dei pulsanti (elementi attivi della pagina)
var creaBiglietto = document.getElementById("crea-biglietto");
var reset = document.getElementById("reset-dati");

// 2.1 specifico le funzioni del bottone "biglietto" e la sua funzione con i campi da compilare (input)
creaBiglietto.addEventListener("click",
    function() {

        // 2.a - Prendo i dati inseriti dall'utente
        var nome = document.getElementById("nome").value;
        var km = parseInt(document.getElementById("km").value);
        var anni = document.getElementById("anni").value;

        // 2.b - Applico le fasce di prezzo ed eventuali sconti
        var prezzo = km * 0.21;
        var offerta = "Standard";

        if ( anni == "minorenne") {
            // sconto 20%
            prezzo = prezzo - (prezzo * 0.20);
            offerta = "Sconto minorenne";
        } else if ( anni == "over") {
            // sconto 40%
            prezzo = prezzo - (prezzo * 0.40);
            offerta = "Sconto Silver";
        } 

        // Arrotondare i 2 decimali del prezzo
        prezzo = prezzo.toFixed(2);
        // 2.c inserisco tutti i dati ricevuti nel resoconto del bilietto
        document.getElementById("dati-passeggero").innerHTML = nome;

        document.getElementById("tipo-offerta").innerHTML = offerta;

        document.getElementById("costo-biglietto").innerHTML = prezzo + " €";

        document.getElementById("num-carrozza").innerHTML = Math.floor(Math.random() * 9) + 1;

        document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * (99999 - 90000) ) + 90000;

        document.getElementById("totale-biglietto").classList.add("mostra");
    }
);

// 2.2 Specifico cosa fa il bottone "reset"

reset.addEventListener("click",
    function(){
        document.getElementById("totale-biglietto").classList.remove("mostra");

        document.getElementById("nome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("anni").value = "0";
    }

);