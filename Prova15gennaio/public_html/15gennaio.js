/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function addHello() {
        
        var txnome= document.getElementById("nome").value;
        var txcognome = document.getElementById("cognome").value;

        document.getElementById("utente").innerHTML =  "Hello" + " " + txnome + " " + txcognome;

    



}

