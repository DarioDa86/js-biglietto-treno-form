// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). 

// 1- dichiaro le variabili dei pulsanti (elementi attivi della pagina)
var biglietto = document.getElementById("crea-biglietto");
var reset = document.getElementById("reset-dati");

// 2.1 specifico le funzioni del bottone "biglietto" e la sua funzione con i campi da compilare (input)
biglietto.addEventListener("click",
    function(){

        var nome = document.getElementById("nome").value;
        var km = parseInt(document.getElementById("km").value);
        var anni = document.getElementById("anni").value;

        if ( anni == "minorenne") {

        } else if ( anni == "over") {

        } else {

        }

        document.getElementById("totale-biglietto").classList.add("mostra");
    }
);

// 2.2 Specifico cosa fa il bottone "reset"

reset.addEventListener("click",
    function(){
        document.getElementById("nome").value = " ";
        document.getElementById("km").value = " ";
        document.getElementById("anni").value = " ";
    }

);