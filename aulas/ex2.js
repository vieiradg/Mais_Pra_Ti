const prompt = require('prompt-sync') ();

// let valor1 = Number(prompt("Digite o primeiro valor: "))
// let valor2 = Number(prompt("Digite o segundo valor: "))
// let operacao = prompt("Digite a operação desejada: (+, -, *, /) ")
// let resultado = 0

// if (operacao === "+") {
//     resultado = valor1 + valor2
// } else if (operacao === "-") {
//     resultado = valor1 - valor2
// } else if (operacao === "*") {
//     resultado = valor1 * valor2
// } else if (operacao === "/") {
//     if (valor2 !== 0) {
//         resultado = valor1 / valor2
//     } else {
//         console.error("Divisão por zero não é permitida.")
//         resultado = undefined
//     }
// } else {
//     console.log("Operação inválida.")
//     resultado = undefined
// }

// if (resultado !== undefined) {
//     console.log(`O resultado da operação ${valor1} ${operacao} ${valor2} é: ${resultado}`)
// }

// -----

let opcao = Number(prompt("Digite uma opção (1, 2 ou 3): "))

switch (opcao) {
    case 1:
        console.log("Opção 1 selecionada.")
        break
    case 2:
        console.log("Opção 2 selecionada.")
        break
    case 3:
        console.log("Opção 3 selecionada.")
        break
    default:
        console.log("Opção inválida.")
        break
}