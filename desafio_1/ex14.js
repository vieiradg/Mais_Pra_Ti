const prompt = require('prompt-sync') ();

let num = Number(prompt("Digite o número que deseja saber o fatorial: "));

let fatorial = 1;

for (i = 1; i <= num; i++) { 
    fatorial = fatorial * i; 
}

console.log(`O fatorial de ${num} é ${fatorial}`);
