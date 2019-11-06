class CriaReceitas{
    constructor(resultado){
        this.resultado = resultado
    }
    renderReceita(){
        const div = `<div class = 'card'> <h2>${this.resultado.titulo}</h2>
        <img class = 'imagem' src = '${this.resultado.imagem}'/>
        <p class = 'igredientes'>${this.resultado.ingredientes}</p>
        </div>`

        document.querySelector('.cards').insertAdjacentHTML('beforeend', div)
        
    }
}

resultados.map(resultado=> {
    new CriaReceitas(resultado).renderReceita()
})