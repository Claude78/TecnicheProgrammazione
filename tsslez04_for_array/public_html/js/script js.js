/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var ar_nomi = [];
//var ar_valori = [];
var ar_nomi= ["bianchi","rossi", "gialli"];
//testo sempre tra doppi apici
//numeri senza "", per fare i decimali si mette il punto
var ar_valori=[45.61,59.10,60,70];

var tot_don = 0;
var num_don = 0;
function addDonazione() {
//carico gli array
    ar_nomi.push(document.getElementById("in_nome").value);
    ar_valori.push(document.getElementById("in_valore").value);
    prep_output();
}

function cancella() {
    var elem = document.getElementById("in_elem").value - 1;
    ar_nomi.splice(elem, 1);
    ar_valori.splice(elem, 1);
    prep_output();
}
function modifica() {
    var elem = document.getElementById("in_elem").value - 1;
    ar_nomi[elem] = document.getElementById("in_nome").value;
    ar_valori [elem] = document.getElementById("in_valore").value;
    prep_output();
}

function accendi() {
    var elem = document.getElementById("in_elem").value - 1;
    var el = document.getElementById("don" + elem);
    el.style.backgroundColor = "yellow";
}
function prep_output() {
    let text = "";
    let totale = 0;
    for (i = 0; i < ar_nomi.length; i++) {
        text += "<span id='don" + i + "'>#" + (i + 1) + ar_nomi[i] + "-" + ar_valori[i] + "</span><br>";
        totale += ar_valori[i] * 1;
        //div_donazioni.innerHTML = text;
        document.getElementById("div_donazioni").innerHTML = text;
        document.getElementById("totale").innerHTML = totale;
        document.getElementById("in_elem").max = ar_nomi.length;
        document.getElementById("in_elem").min = 1;
    }
}

function undo() {
    ar_nomi.pop();
    ar_valori.pop();
    prep_output();
}
function cerca() {
    let nome_ricerca = document.getElementById("in_nome").value;
    /* 
     do {
     } while (condizionevera);
     
     */
    let continua = true;
    let i = 0;
    while (continua === true) {
        nome_corrente = ar_nomi[i];
        if (nome_ricerca === nome_corrente) {
            //trovatooooo
            continua = false;
            document.getElementById("valore_ricerca").innerHTML = ar_valori[i];
        } else {
            i++;
            //niente vado al prossimo
        }
        //verifico che non ce ne siano più
        if (i >= ar_nomi.length) {
            //continua=true;
            continua = false;
            document.getElementById("valore_ricerca").innerHTML = "nominativo non trovato:(";



        }
    }






}