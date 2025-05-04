const prompt = require('prompt-sync')();

let soma = 0;
let count = 0

while (count < 5) {
    soma = soma + Number(prompt("Digite um número: "));
    count ++
}

console.log("A soma dos números é:", soma);