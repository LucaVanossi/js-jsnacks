let NumeroUtente = "a";

while (isNaN(NumeroUtente)) {
    NumeroUtente = prompt ("Inserisci un numero");
} 
const Risultato =CuboN (NumeroUtente);
alert (Risultato);

function CuboN (NumeroUtente) {
    let Cubo = [];
    for (inr=1; inr<=NumeroUtente; inr++) {
        Cubo.push (inr ** 3);
    }
    return Cubo;
}




