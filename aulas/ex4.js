const prompt = require('prompt-sync') ();

// let operador = prompt("selecione o operador +, -, *, / : ")
// let num1 = Number(prompt("escolha um número: "))
// let num2 = Number(prompt("escolha outro número: "))
// let resultado

// switch (operador) {
//     case '+':
//         resultado = num1 + num2;
//         break;
//     case '-':
//         resultado = num1 - num2;
//         break;
//     case '*':
//         resultado = num1 * num2;
//         break;
//     case '/':
//         resultado = num1 / num2;
//         break;

//     default:
//         console.log("Operador inválido");
// }

// console.log(resultado);

// -----

let num = Number(prompt("escreva um numero: "))

if (num % 2 === 1) {
    console.log ("é primo")
} else {
    console.log ("não é primo")
}

