/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var num1;
var num2;
var risultato;
var totale = 0;
var okDati;
function isVuota(testo) {
    if (testo.length == 0)
        return true;
    else
        return false;
}

function checkDati() {
    //verifico num1 e num2
    //e ritorno true se presenti solo numeri oppure non compilato
    // altrimenti ritorno false

    if (isNaN(num1) || isNaN(num2) || isVuota(num1) || isVuota(num2)) {
        return false;
    } else {
        return true;
    }
}


function faseInput() {
    num1 = document.getElementById("in_num1").value;
    num2 = document.getElementById("in_num2").value;
    okDati = checkDati();
    //verifico okDati e poi vedo se trasformare in numeri
    if (okDati == true) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    } else {
        alert("attenzione dati non corretti");
    }
}

function faseOutput() {
    document.getElementById("in_ris").innerHTML = risultato;
    document.getElementById("totale").innerHTML = totale;
    document.getElementById("in_num1").value = "";
    document.getElementById("in_num2").value = "";
}






function calcola(op) {
    faseInput();
    if (okDati) {
        if (op == "+")
            risultato = num1 + num2;
        if (op == "-")
            risultato = num1 - num2;
        if (op == "*")
            risultato = num1 * num2;
        if (op == "/")
            risultato = num1 / num2;

        totale = totale + risultato;
        faseOutput();
    }
}





