

// const btn = document.getElementById('btn')

const cardSection = document.getElementById('cards-section')


selecionaCartaAleatoria = cartas =>{
    let cartaRandom = Math.floor(Math.random()*cartas.length)
    return cartas[cartaRandom]
}


renderizaCarta = carta =>{
    const novaCarta = new Card (carta).render()
    cardSection.innerHTML = novaCarta 
}

async function tiraTarot() {
try{
    const response = await fetch('tarot.json')
if(!response.ok) throw `com o status ${response.status}`

    const json = await response.json()
    renderizaCarta(selecionaCartaAleatoria(json))
}catch(e){
    renderizaCarta()

}

}

tiraTarot()

novaCarta = () => {
    
    tiraTarot()
}




// fetch('tarot.json').then(response => {
//     return response.json()
// }).then(json=> {
//     console.log(json)
// renderizaCarta(selecionaCartaAleatoria(json))
// renderizaCarta(tiraTarot(json))

// })

//fazendo o botão muito louco

// btn.addEventListener('click', function tirandoTarot() {
        
// })

