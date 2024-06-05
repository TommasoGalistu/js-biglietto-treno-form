let buttonGenera = document.querySelector('#genera');
let buttonAnnulla = document.querySelector('#annulla');
let contButton = document.querySelector('#containerButton')

contButton.addEventListener('click', (event) => {
    let tipoButton = event.target.id
    if(tipoButton === 'genera'){
        console.log('dentro genera')
    }else if(tipoButton === 'annulla'){
        console.log('dentro annulla')
    }
})