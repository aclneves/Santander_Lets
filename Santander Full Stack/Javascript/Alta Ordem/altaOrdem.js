const sub = (a, b) => a-b;
const soma = (a,b) => a+b;
const aplicaOperacao = (a, b, operacao) => operacao(a, b);

let subtrair = aplicaOperacao(4, 2, sub);
console.log(subtrair);
let somar = aplicaOperacao(4, 2, soma);
console.log(somar);