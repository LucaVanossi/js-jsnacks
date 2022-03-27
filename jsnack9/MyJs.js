/*Primaparte esercizio*/
let Numeri = [7,8,9,10,15,36,98,21,54,7];
var somma=0;
const risultato = mediaAritmetica (Numeri)

function mediaAritmetica (Numeri) {
    for(i=0; i<Numeri.length; i++){
        somma+=parseFloat(Numeri[i]);
    } 
        somma/=Numeri.length;
        return somma;
} 

alert(risultato);

/*seconda parte esercizio*/
function SommaNumeri (NumeriUtente) {
    let Risultato = 0;
    for (i=0; i<10; i++) {
        Risultato +=NumeriUtente[i];
    } return Risultato;
}

let NumeriUtente = [];
    for(inr = 0; inr < 10; inr++){
        NumeriUtente[inr] = parseInt(prompt("Numero " + (inr+1)));
    }

let mediaSomma = SommaNumeri (NumeriUtente);
mediaSomma/=NumeriUtente.length;
alert (mediaSomma);