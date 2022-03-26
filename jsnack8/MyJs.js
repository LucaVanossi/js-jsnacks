let Numeri = [7,8,9,10,15,36,98,21,54,7];

const RisultatoFinale = SommaNumeri(Numeri);
alert (RisultatoFinale);

function SommaNumeri (Numeri) {
    let Risultato = 0;
    for (i=0; i<10; i++) {
        Risultato +=Numeri[i];
    } return Risultato;
}