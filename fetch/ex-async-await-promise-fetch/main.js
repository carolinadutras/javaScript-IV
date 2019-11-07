fetch ('rainbow.jpg').then(response=>{
    console.log(response)
    return response.blob()
}).then(blob =>{
    console.log(blob)
    document.getElementById('rainbow').src= URL.createObjectURL(blob)
}).catch(console.error(error));

//para observar o erro 404 e false no ok

fetch ('rainbows.jpg').then(response=>{
    console.log(response)
    return response.blob()
}).then(blob =>{
    console.log(blob)
    document.getElementById('rainbow').src= URL.createObjectURL(blob)
}).catch(console.error(error));


async function pegaArcoIro() {
    try {
        const response = await fetch('rainbow.jpg')

    }
    
}