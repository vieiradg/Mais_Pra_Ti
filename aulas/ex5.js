const prompt = require('prompt-sync') ();

// let c = Number(prompt("Digite a temperatura em Celsius: "));
// let f = (c * 9/5) + 32;

// console.log(`A temperatura em Fahrenheit é: ${f} + "°F"`);

// -----

// let totalEleitores = Number(prompt("Digite o número total de eleitores: "));
// let votosValidos = Number(prompt("Digite o número de votos válidos: "));
// let votosNulos = Number(prompt("Digite o número de votos nulos: "));
// let votosBrancos = Number(prompt("Digite o número de votos em branco: "));

// let percentualValidos = (votosValidos / totalEleitores * 100).toFixed(2);
// let percentualNulos = (votosNulos / totalEleitores * 100).toFixed(2);
// let percentualBrancos = (votosBrancos / totalEleitores * 100).toFixed(2);

// console.log(`Percentual de votos válidos: ${percentualValidos}%`);
// console.log(`Percentual de votos nulos: ${percentualNulos}%`);
// console.log(`Percentual de votos em branco: ${percentualBrancos}%`);

// -----

// let turmaC = 60; // Total de alunos em C
// let turmaD = 20; // Total de alunos em D

// let reprovadosC = Number(prompt("Digite o número de alunos reprovados em C: "));
// let reprovadosD = Number(prompt("Digite o número de alunos reprovados em D: "));
// let reprovadosGeral = reprovadosC + reprovadosD;

// let aprovadosC = C - reprovadosC; 
// let aprovadosD = D - reprovadosD;
// let aprovadosGeral = C + D - reprovadosGeral;

// let percentualC = (reprovadosC / turmaC * 100).toFixed(2);
// let percentualD = (reprovadosD / turmaD * 100).toFixed(2);
// let percentualGeral = (reprovadosGeral / (turmaC + turmaD) * 100).toFixed(2);

// let percentualAprovadosC = (aprovadosC / turmaC * 100).toFixed(2);
// let percentualAprovadosD = (aprovadosD / turmaD * 100).toFixed(2);
// let percentualAprovadosGeral = (aprovadosGeral / (turmaC + turmaD) * 100).toFixed(2);

// console.log(`Percentual de alunos reprovados em C: ${percentualC}%`);
// console.log(`Percentual de alunos reprovados em D: ${percentualD}%`);
// console.log(`Percentual de alunos reprovados no geral: ${percentualGeral}%`);

// console.log(`Percentual de alunos aprovados em C: ${percentualAprovadosC}%`);
// console.log(`Percentual de alunos aprovados em D: ${percentualAprovadosD}%`);
// console.log(`Percentual de alunos aprovados no geral: ${percentualAprovadosGeral}%`);


// -----

// let fimSemana = ['sábado', 'domingo'];
// let semana = ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];
// let dia = prompt("Digite o dia da semana: ")

// if (fimSemana.includes(dia)) {
//     console.log('Final de semana!');
// }
// else if (semana.includes(dia)) {
//     console.log('Dia de semana!');
// }
// else {
//     console.log('Dia inválido!');
// }



// if ((diaSemana == 'sábado') || (diaSemana == 'domingo')) {
//     console.log('Final de semana!');
// } else {
//     console.log('Dia de semana!');
// }



// switch (diaSemana) {
//     case 'sábado':
//     case 'domingo':
//         console.log('Final de semana!');
//         break;
//     case 'segunda':
//     case 'terça':
//     case 'quarta':
//     case 'quinta':
//     case 'sexta':
//         console.log('Dia de semana!');
//         break;
//     default:
//         console.log('Dia inválido!');
//         break;
// }

// -----

// do ele roda o bloco de codico pelo menos uma vez
// while ele roda o bloco de codico enquanto a condição for verdadeira

// let valor 

// do {
//     valor = Number(prompt("Digite um número: "))

//     if (valor > 0) {
//         console.log(`O número ${valor} é positivo!`)
//     } else if (valor < 0) {
//         console.log(`O número ${valor} é negativo!`)
//     } else {
//         console.log('Número inválido!')
//         break;
//     }
// } while (valor != 0)

// -----

let senha;
let usuario;

do {
    senha = prompt("Digite a senha: ");
    usuario = prompt("Digite o usuário: ");

    if ((senha == 'admin') && (usuario == 'admin')) {
        console.log('Acesso permitido!');
    } else {
        console.log('Senha inválida!');
        break;
    }
} while (senha != 'admin' || usuario != 'admin');

