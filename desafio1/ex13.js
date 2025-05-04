const prompt = require('prompt-sync') ();

console.log("Digite um números para calcular a média e quando quiser parar digite 0")

let soma = 0;
let count = 0
let pause

do {
    pause = Number(prompt("Digite um número: "));
    soma = soma + pause

    if (pause === 0) {
        break
    }

    count ++

} while (pause !== 0)

let media = soma / count

console.log("A soma dos números é:", soma);
console.log("A média dos números é:", media.toFixed(2));