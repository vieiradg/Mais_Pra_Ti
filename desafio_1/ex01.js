const prompt = require('prompt-sync') ();

let num = Number(prompt("Digite um número: "))

if (num % 2 === 0) {
    console.log('par');
} else {
    console.log('impar');
}