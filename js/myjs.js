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
        console.log('dentro annulla')
    }
});

function genera(){
    let risultato;
    
    if(eta.value === 'minorenne'){
        risultato = (kmPercorsi.value * 0.21) * 0.8;
        tipoTariffa.textContent = 'Tariffa minorenni';
    }else if(eta.value === 'anziano'){
        risultato = (kmPercorsi.value * 0.21) * 0.6;
        tipoTariffa.textContent = 'Over 65';
    }else{
        risultato = (kmPercorsi.value * 0.21);
        tipoTariffa.textContent = 'Tariffa Standard';
    }
    costoBigl.textContent = risultato.toFixed(2) + '€';
    textNomePasseggero.textContent = nomeCognome.value.toUpperCase();
    
};