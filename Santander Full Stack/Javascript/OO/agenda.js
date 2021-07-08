const agenda = {
    contatos: [
        {nome: 'contato1', telefone: 'telefone1', email: 'email1@teste.com'},
        {nome: 'contato2', telefone: 'telefone2', email: 'email2@teste.com'},
        {nome: 'contato3', telefone: 'telefone3', email: 'email3@teste.com'},
        {nome: 'contato4', telefone: 'telefone4', email: 'email4@teste.com'},
    ],
    adicionar : function(contato){this.contatos.push(contato);}
}

console.log(agenda.contatos);

agenda.adicionar({nome: 'Antonio', telefone: '993877270', email: 'aclneves@gmail.com'});

console.log(agenda.contatos);