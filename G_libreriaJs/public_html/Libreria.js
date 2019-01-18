/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ar_nomi = [];


function addVotazione() {
    //provo la funzione cubo o quadrato con 5 come parametro
    //alert("quadrato di 5:" + quadrato(5));
    //alert("cubo di 5:" + cubo(5))

    //var txnome = "";
    //let ris = elencoAlunniBr(ar_nomi);
    let txnome = document.getElementById("in_nome").value;
   
    ar_nomi.push(txnome);
    //document.getElementById("alunni").innerHTML = ris;
    let mytag=document.getElementById("alunni");
    elencoAlunniBrObj(ar_nomi,mytag);
    //molto generica a seconda di cosa gli passo 


}





