// variabili dei due bottoni e contenitore dei bottoni
let buttonGenera = document.querySelector('#genera');
let buttonAnnulla = document.querySelector('#annulla');
let contButton = document.querySelector('#containerButton');

// variabili degli input
let nomeCognome = document.querySelector('#nomeCognome');
let kmPercorsi = document.querySelector('#kmPercorsi');
let eta = document.querySelector('#selezioneEta');

// variabili dove andrò a trascrivere dagli input alla parte client
let textNomePasseggero = document.querySelector('#nomePasseggero');
let tipoTariffa = document.querySelector('#tariffa');
let carrozzaNr = document.querySelector('#carrozza');
let codiceBiglietto = document.querySelector('#codiceBigl');
let costoBigl = document.querySelector('#costo');

// ascoltatore di eventi sul contenitore, se clicco uno o l'altro parte una diversa funzione
contButton.addEventListener('click', (event) => {
    let tipoButton = event.target.id
    if(tipoButton === 'genera'){
        genera()
    }else if(tipoButton === 'annulla'){
        annulla()
    }
});

// variabile risultato prezzo finale
let risultato = 0;
// variabili per assegnazione posto treno
let posto = 1;
let carr = 1;
let personeInPiedi = 1;
let numTreno = 58900;

// funzione che si attiva al click di genera
function genera(){

    // calcolo prezzo
    let prezzoPagato = risultato
    // calcolo costi in base all'età selezionata
    if(eta.value === 'minorenne'){
        risultato = (kmPercorsi.value * 0.21) * 0.8;
        tipoTariffa.textContent = 'Tariffa Minori';
    }else if(eta.value === 'anziano'){
        risultato = (kmPercorsi.value * 0.21) * 0.6;
        tipoTariffa.textContent = 'Over 65';
    }else{
        risultato = (kmPercorsi.value * 0.21);
        tipoTariffa.textContent = 'Tariffa Standard';
    }
    // se ha preso più di un biglietto paga la somma
    if(risultato !== 0){
        risultato += prezzoPagato
    }
    // inserimento costo personalizzato per età
    costoBigl.textContent = risultato.toFixed(2) + '€';



    // inserimento nome e cognome in maiuscolo
    textNomePasseggero.textContent = nomeCognome.value.toUpperCase();



    // inserimento numero carrozza
    carrozzaNr.textContent = `Carr ${carr} - Posto ${posto}`
    posto++
    if(posto === 50){
        carr++
        posto = 1
    }else if(carr === 9){
        let finePosti = 'In piedi'
        carrozzaNr.textContent = finePosti
        personeInPiedi++
    }
    



    // inserimento numero treno
    if(personeInPiedi < 90){
        codiceBiglietto.textContent = numTreno
    }else{
        numTreno++
        carr = 1;
        posto = 1;
        personeInPiedi = 0;
    }
    
    // fine dell'inserimento e blocco degli input
    nomeCognome.setAttribute('disabled', 'disabled')
    kmPercorsi.setAttribute('disabled', 'disabled')
    eta.setAttribute('disabled', 'disabled')
};


// funzione per annullare ordine, un click torna indietro, doppio click resetta
let clickInAnnulla = 0
// funzione torna indietro
function annulla(){
    // se il cliente clicca due volte resetta il testo
    if(clickInAnnulla !== 0){
        textNomePasseggero.textContent = 'Nome passeggero'
        tipoTariffa.textContent = 'Scegli tariffa'
        carrozzaNr.textContent = '-'
        codiceBiglietto.textContent = '-'
        costoBigl.textContent = '-'
    }
    // fine dell'inserimento e blocco degli input
    nomeCognome.removeAttribute('disabled', 'disabled')
    kmPercorsi.removeAttribute('disabled', 'disabled')
    eta.removeAttribute('disabled', 'disabled')
    
    clickInAnnulla++
    
}
