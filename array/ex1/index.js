let frutas = ["banana", "morango", "bacurí", "laranja"];

const botao = document.getElementById('button')
const input = document.getElementById('input')
//let fruta = input.value
 //----------FAZENDO COM FILTER


// botao.addEventListener('click', function () {

//     let achaFruta = frutas.filter((fruta)=> fruta ===input.value)
//     console.log(achaFruta)
//     if (achaFruta.length >0){
//         alert (`Achou o ${input.value}`)
//     }else{
//         alert (`Não achou o${input.value}`)
//     }
// })

// ---------Fazendo com find
// botao.addEventListener('click', function () {

//    if (frutas.find(fruta=> fruta === input.value)){
//        alert (`Achou o ${input.value}`)
//     } else{
//         alert (`Não achou o ${input.value}`)
//     }
// })




botao.addEventListener('click', function () {


    if (frutas.find(fruta=> fruta === input.value)){
        alert (`Achou o ${input.value}`)
    
        } else{
            alert (`Não achou o ${input.value}`)
        }
    })