/* 
    #Mail
        Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
    #Gioco dei dadi
        Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

    ##Tools:
    -console.log / .getElementById (metodi);
    -let / const (variabili);
    -prompt / alert (funzioni);
    -if / if else / else (condizioni);
    -< > (operatori);
    -array (oggetto);
    -\n (escape, testo a capo)
*/

// seleziono il container inserito in pagina html
const background = document.getElementById('container');

// tramite un prompt chiedo all'utente di inserire la propria mail
const emailUtente = prompt('Inserisci la tua email:');

// controllo se la mail inserita è presente nella lista con le mail autorizzate ad accedere
const emailsAutorizzate = ['a', 'a@mail.it', 'b@mail.it', 'c@mail.it'];

// se è presente nella lista presento un alert di benvenuto e inizializzo tramite prompt il gioco
if (emailsAutorizzate.includes(emailUtente)) {
    // Gioco dei dadi
    alert('Accesso consentito. Benvenuto al Gioco dei Dadi!');

    // tramite un prompt chiedo all'utente di lanciare i dadi o di annullare l'operazione
    const lancioDadi = confirm('Vuoi lanciare i dadi?');
    
    // se accetta di giocare
    if (lancioDadi) {
        
        // genero un numero casuale per l'utente
        const dadoGiocatore = Math.floor(Math.random() * 6) + 1;

        // genero un numero casuale per il computer
        const dadoComputer = Math.floor(Math.random() * 6) + 1;

        // paragono i risultati casuali ottenuti
        alert(`Giocatore: ${dadoGiocatore}\nComputer: ${dadoComputer}`);

        // collego una classe applicata ad un div dell'html per stampare il risultato in pagina
        const result = document.querySelector('.text');

        // definisco il vincitore
        if (dadoGiocatore > dadoComputer) {
            background.classList.add('win');
            result.textContent = ('Hai vinto!')
        } else if (dadoComputer > dadoGiocatore) {
            background.classList.add('lose');
            result.textContent = ('Hai perso!')
        } else {
            background.classList.add('draw');
            result.textContent = ('Pareggio!')
        }

    }
    // se non accetta di giocare 
        // saluto l'utente tramite un alert

// se non è nella lista invio un alert con l'avviso di respingimento
} else {
    alert('Accesso negato. La tua email non è autorizzata ad accedere al gioco.');
}
