/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//mi serve un array per array per caricare tutte le valutazioni 


var ar_valutazioni = [];
//un metodo per aggiungere le valutazioni all'array

function addVotazione() {
    //recupero le informazioni
    let valut = document.getElementById("in_valore").value;
    //lavoro le informazioni
    ar_valutazioni.push(valut*1);
    //valut*1:ho trasformato una stringa in numero moltiplicando *1

}
function visMedia() {
    let totale = 0;
    for (i = 0; i < ar_valutazioni.lenght; i++) {
        totale = totale + ar_valutazioni[i];
 }
        let media = totale / ar_valutazioni.lenght;
        document.getElementById("div_media").innerHTML=media;

   
}
