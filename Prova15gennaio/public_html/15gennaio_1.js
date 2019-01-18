/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function addHello() {

    var txnome = document.getElementById("nome").value;
    var txcognome = document.getElementById("cognome").value;

    document.getElementById("utente").innerHTML = "Hello" + " " + txnome + " " + txcognome;

}

function addEsito() {
    var voto = 0;
    voto = document.getElementById("voto").value;
    var votoMinimo = 0;
    votoMinimo = document.getElementById("votoMinimo").value;

    var txnome = document.getElementById("nome").value;
    var txcognome = document.getElementById("cognome").value;


    if (voto >= votoMinimo) {
        var esame = "PROMOSSO";
    } else {
        var esame = "BOCCIATO";
    }



    document.getElementById("esitoEsame").innerHTML = txnome + " " + txcognome + " " + esame ;

}