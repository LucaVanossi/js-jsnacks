let ContenitoreNumeriDispari = [];
for (inr=0; inr<6; inr++) {
    let NumeroUtente = prompt ("Inserisci il numero " + (inr+1)); 
    if (NumeroUtente% 2 != 0) {
    ContenitoreNumeriDispari.push (NumeroUtente);   
    }
} alert (ContenitoreNumeriDispari);