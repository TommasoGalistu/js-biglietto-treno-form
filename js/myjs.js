// variabili dei due bottoni e contenitore dei bottoni
let buttonGenera = document.querySelector('#genera');
let buttonAnnulla = document.querySelector('#annulla');
let contButton = document.querySelector('#containerButton')

// variabili degli input
let nomeCognome = document.querySelector('#nomeCognome')
let kmPercorsi = document.querySelector('#kmPercorsi')
let eta = document.querySelector('#selezioneEta')

// ascoltatore di eventi sul contenitore, se clicco uno o l'altro parte una diversa funzione
contButton.addEventListener('click', (event) => {
    let tipoButton = event.target.id
    if(tipoButton === 'genera'){
        genera()
    }else if(tipoButton === 'annulla'){
        console.log('dentro annulla')
    }
})

function genera(){
    let a = nomeCognome.value
    let b = kmPercorsi.value
    let c = eta.value
    console.log(a, b, c)
    
}