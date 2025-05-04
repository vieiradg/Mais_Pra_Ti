const prompt = require('prompt-sync') ();

let operador = prompt("selecione o operador +, -, *, / : ")
let num1 = Number(prompt("escolha um número: "))
let num2 = Number(prompt("escolha outro número: "))
let resultado

switch (operador) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        resultado = num1 / num2;
        break;

    default:
        console.log("Operador inválido");
}

console.log(resultado);

// .pop('item')
// .push('item')
// .unshift()
// .shift()

// .indexof('item')

// arrays unidimensionais 

// push - adiciona no último 
// unshift - adiciona no primeiro 
// pop - exclui o último 
// shift - excluir o primeiro