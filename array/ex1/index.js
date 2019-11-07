
let btn = document.getElementById('btn')
let input = document.getElementById('input')
let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase())


btn.addEventListener('click', function(){
    // let arrAchou = frutas.filter(fruta => fruta === input.value)
    // console.log(arrAchou)
    // if(arrAchou.length > 0){
    //     alert(`ACHOU O ${input.value}`)
    // }else{
    //     alert(`Não achou o ${input.value}`)
    // }

    // if(frutas.find(fruta => fruta === input.value)){
    //     alert(`ACHOU O ${input.value}`)
    // }else{
    //     alert(`Não achou o ${input.value}`)
    // }
    console.log(typeof input.value)
console.log(frutasMaiusculas)

    if( frutasMaiusculas.indexOf(input.value.toUpperCase()) > -1){
            alert(`ACHOU O ${input.value}`)
        }else{
            alert(`Não achou o ${input.value}`)
        }
})

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

