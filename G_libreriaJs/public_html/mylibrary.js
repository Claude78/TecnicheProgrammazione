/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function elencoAlunniBr(myArray) {
    let ris = " ";
    for (i = 0; i < myArray.length; i++) {
        ris += myArray[i] + "<br> ";
    }
    return ris;

}

//funzione generica che ha due parametri: uno quello in cui prenderlo l'altro dove deve "iniettarlo"
function elencoAlunniBrObj(myArray, myObjTag) {

    let ris = " ";
    for (i = 0; i < myArray.length; i++) {
        ris += myArray[i] + "<br> ";
    }

    myObjTag.innerHTML = ris;

    //return ris;
    //non mi interessa che ritorni niente per cui non segno return

}

function elencoAlunniOl(ar) {
//devo produrre ris es: <ol><li>claudia</li><li>claudia</li></ol>
    let ris = "<ol> ";
    for (i = 0; i < ar.length; i++) {
        ris += "<li> " + ar[i] + "</li> ";
    }

    ris += " </ol>"

    return ris;

}

function potenza(valore, esponente) {
    //creo una variabile di ritorno
    let ris = 1;
    //metto ris = 1 perchè se metto 0 moltiplica per 0 e le potenze non risultano

//ris=2*2*2 caso 2 alla 3 simile a ris=valore*valore*valore
//ris=3*3 caso 3 alla 2  simile ris= ris=valore*valore
/*
if (esponente==2)
    ris=valore*valore;
if(esponente==3)
    ris=valore*valore*valore;
    */
   
for (i=0;i<esponente;i++){
    ris=ris*valore;
}

    return ris;
}

function cubo(valore) {
    ris = 0;
    //ris=3*3*3;
    ris = valore * valore * valore;
    return ris;


}


function quadrato(valore) {
    ris = 0;
    //ris=3*3;
    ris = valore * valore;
    return ris;


}

function somma(valore1,valore2){
ris =0;
valore1=valore1*1;
valore2=valore2*1;
ris=valore1 + valore2;
return ris;
}