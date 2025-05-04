const prompt = require('prompt-sync') ();

let codico = prompt("Digite o código do produto: ")

switch (codico) {
    case '0001':
        console.log("carne 1kg")
        console.log("R$ 45,00")
        break;
    case '0002':
        console.log("arroz 1kg")
        console.log("R$ 7,00")
        break;
    case '0003':
        console.log("feijão 1kg")
        console.log("R$ 8,00")
        break;
    default:
        console.log("Produto não encontrado")
}