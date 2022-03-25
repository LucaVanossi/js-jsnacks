let numeri = [];
    for(inr = 0; inr < 10; inr++){
        numeri[inr] = parseInt(prompt("Numero " + (inr+1)));
    }
    let sommanumeri = 0;
    for(inr=0; inr < (numeri.length); inr++){
        sommanumeri = sommanumeri + numeri[inr]
        console.log(sommanumeri);
    }
    alert("La somma è: " + sommanumeri);