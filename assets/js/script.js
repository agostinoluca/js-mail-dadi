/* 
    #Mail
        Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
    #Gioco dei dadi
        Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

    ##Tools:
    -console.log (metodi);
    -let / const (variabili);
    -prompt / alert (funzioni);
    -if / if else / else (condizioni);
    -< > (operatori);
    -array (oggetto).
*/


// tramite un prompt chiedo all'utente di inserire la propria mail
const emailUtente = prompt('Inserisci la tua email:');

// controllo se la mail inserita è presente nella lista con le mail autorizzate ad accedere
const emailsAutorizzate = ['a@mail.it', 'b@mail.it', 'c@mail.it'];

// se è presente nella lista presento un alert di benvenuto e inizializzo tramite prompt il gioco
if (emailsAutorizzate.includes(emailUtente)) {
    // Gioco dei dadi
    alert('Accesso consentito. Benvenuto al Gioco dei Dadi!');
}
    // tramite un prompt chiedo all'utente di lanciare i dadi o di annullare l'operazione
        // se accetta di giocare
            // genero un numero casuale per l'utente
            // genero un numero casuale per il computer
            // paragono i risultati casuali e definisco il vincitore
            // stampo in pagina il vincitore
        // se non accetta di giocare 
            // saluto l'utente tramite un alert
// se non è nella lista invio un alert con l'avviso di respingimento
