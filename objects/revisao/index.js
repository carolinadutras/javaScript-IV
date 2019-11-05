function Professora(nome, idade, materia){
    this.nome = nome
    this.idade = idade
    this.materia = materia

}
const p1 = new Professora('Raissa', '27', 'bootstrap e preprocessadores')
console.log(p1)


Professora.prototype.dizMateria = function () {
    return(`A matéria é ${this.materia}`)
    
}
console.log(p1.dizMateria())