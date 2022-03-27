let NumeroUtente = prompt ("Inserisci il tuo numero di 4 cifre");

if (isNaN(NumeroUtente)) {
    alert ("Non hai inserito un numero");
} else { 
    const Risultato =  SommaNumero (NumeroUtente);
    alert (Risultato);
}

function SommaNumero (NumeroUtente) {
    let SommaCifre = 0;
    for (i=0; i<=3; i++) {
        SommaCifre+= parseInt((NumeroUtente.substring(i,i+1)));
    } return SommaCifre;
}