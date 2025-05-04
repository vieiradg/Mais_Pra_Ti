const prompt = require('prompt-sync') ();

let count = 0
let num = Number(prompt("Digite um número: "))

// while (count < 11) {
//     console.log(`${num} * ${count} = ${num * count}`)
//     count++
// };

// -----

for (let i = 0; i < 11; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
}

// ctrl + ; comenta o codico selecionado