const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")

//... continuem a pegar os inputs do index.html para preencher depois com o valor da api


preencheInputs = objeto =>{

    logradouroInput.value 
    = objeto.logradouro
    complementoInput.value = objeto.complemento
    bairroInput.value = objeto.bairro
    localidadeInput.value = objeto.localidade
    ufInput.value = objeto.uf

}
cepInput.addEventListener("blur", ()=>{
    if(cepInput.value){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
            preencheInputs(json)
            ///façam aparecer os valores nos inputs
        //  logradouroInput.value=json.logradouro
        //  complementoInput.value=json.complemento
        //  bairroInput.value=json.bairro
        //  localidadeInput.value=json.localidade
        //  ufInput.value=json.uf
        })
    }
})
