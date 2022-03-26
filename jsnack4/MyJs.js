let NomeUtente = prompt("Please enter your name");

let InvitatiFesta = ["Marco", "Luca", "Matteo", "Mattia", "Giovanni"];

let messaggio = "Non sei invitato";
for (inr=0; inr<InvitatiFesta.length;inr++) {
    if (NomeUtente==InvitatiFesta [inr]) {
    messaggio ="Sei nell'elenco degli invitati!";
    break;
    } 
} 
    alert (messaggio);



 
