class Pessoa {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Antonio', 33);
const pessoa2 = new Pessoa('Priscilla', 27);

console.log('Nome: ' + pessoa1.nome + 'Idade: ' + ' ' + pessoa1.idade);
console.log('Nome: ' + pessoa2.nome + 'Idade: ' + ' ' + pessoa2.idade);

pessoa1.idade++;

console.log(pessoa1.idade);