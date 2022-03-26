let NumeroGenerato = Math.floor(Math.random() * 11);
alert (NumeroGenerato);
let NumeroUtente = 22;
while (NumeroGenerato!=NumeroUtente) {
    NumeroUtente = prompt ("Inserisci un numero tra 0 e 10");
}   alert ("Hai inserito lo stesso numero del computer!");