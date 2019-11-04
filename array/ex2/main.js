const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Priscilla Roiz Garcia',
'Priscilla Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']

const form = document.getElementById('form-do-role')
// const nome = document.getElementById('nome').value
// const div = document.getElementById('status')
// const p = document.createElement('p')

const validacao = (nome) => {
    if(nome.trim() ==='') throw 'O campo está vazio'
}

const checaPresenca = nome=>{
    
}





form.addEventListener('submit', function () {
    event.preventDefault()

    let valorCampo = document.getElementById('nome').value

try{
    validacao(valorCampo)
}catch(erro){
    console.log('DEU RUIM');
    
}

})


//     console.log(input.value)
//     let lista = nomesNoRole.filter((nome)=> nome ===input.value)
//     console.log(lista)  
//     div.appendChild(p)

// if(lista.length>0){
//     p.textContent(`A ${input.value} vai para o role`)
// }else{
//     p.textContent(`A ${input.value} não vai para o role`)
// }