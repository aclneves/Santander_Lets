let sinal = "verde"
switch (sinal) {
    case "verde":
        console.log("Pode passar!");
        break;
    case "amarelo":
        console.log("Atenção!")
        break;
    case "vermelho":
        console.log("Fechado, não passe!")
        break;
    default:
        console.log("Não é uma cor correta!")
}