
document.querySelector('.button__search').addEventListener('click', function () {
    let input = document.querySelector('.input__search').value.toUpperCase()
    let achaReceita = resultados.filter(resultado =>{
        return resultado.titulo.toUpperCase().includes(input) || 
        resultado.ingredientes.toUpperCase().includes(input)
    })


    if (achaReceita.length > 0){
document.getElementById('section-cards').innerHTML = `<div> </div>` 

achaReceita.map(achado => {
    new CriaReceitas(achado).renderReceita()
})

    }else{ document.getElementById('section-cards').innerHTML = `<div><p>Item não encontrado</p></div>` 


    }
    
})



