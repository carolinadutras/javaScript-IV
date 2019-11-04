const comidas = ['lasanha', 'batata', 'bacon']

console.log (comidas[2])

comidas.forEach((comida, posicao) => {
    console.log(`Na posição ${posicao} temos a comida: ${comida}`)
})

// concat faz cópia da array e adiciona o elemento que a gente passa como
let outrasComidas = comidas.concat ('jiló')
console.log('comidas', comidas);
console.log('outras comidas', outrasComidas)

//join - cria uma string do arrray e ele utiliza o argumento como separador

let stingDoArray = comidas.join(',')
console.log (stingDoArray)

//shift-> arranca o primeiro item da lista, e mostra depois qual ele removeu (que é permanente )

console.log(comidas.shift())
console.log(comidas)

//pop-> arranca o ultimo item do array e retorna o que ele deletou
// modifica permanentemente o array

console.log(comidas.pop())
console.log (comidas)

// unshift add um item na primeira posição do array
//modifica permanentemente o array

comidas.unshift('macarrão')
console.log (comidas)

// push add um item na ultima posição do array
//modifica permanentemente o array

comidas.push('strogonoff')
console.log(comidas)

// reverse- inverte o array

comidas.reverse()
console.log(comidas)

// faz uma cópia simples delimitando o começo e o final da parte que eu quero
// slice(começo, final)

let cortarAlimentos = comidas.slice(1,2)
console.log (cortarAlimentos)
console.log(comidas)

// splice-- pode remover e adicionar valores utilizando posição, indice de apagar,

comidas.splice(2,0,'alface')
console.log (comidas)

//coloca em ordem alfabetica
comidas.sort()
console.log(comidas)

comidas.push('Alface')
comidas.push('Tomate')
comidas.push('berinjela')

console.log(comidas.indexOf('batata'));
console.log(comidas.lastIndexOf('brocolis'))

let mapArray = comidas.map((comida)=>`${comida} Gostosa`)

console.log(mapArray);
console.log(comidas)

let teste = comidas.forEach((comida)=>`${comida}boa`)

console.log(teste)

const numeros = [1, 2, 3, 4, 5]
let numerosDobrados = numeros.map((numero)=> numero*2)
console.log(numerosDobrados)

let arrayProcura = comidas.filter((comida)=> comida==='batata')
console.log(arrayProcura)

let juntaComida = comidas.reduce((esq, dir) =>{
    return `${esq} e ${dir}`
})
console.log(juntaComida)


console.log(numeros)
console.log(numeros.find(numero=> numero===1));
console.log(numeros.findIndex(numero=> numero===1))

console.log(numeros.find(numero=> numero=== -1));
console.log(numeros.findIndex(numero=> numero===9))

