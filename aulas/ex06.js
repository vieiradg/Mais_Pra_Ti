let C = 60; // Total de alunos em C
let D = 20; // Total de alunos em D

let reprovadosC = Number(prompt("Digite o número de alunos reprovados em C: "));
let reprovadosD = Number(prompt("Digite o número de alunos reprovados em D: "));
let reprovadosGeral = reprovadosC + reprovadosD;

let percentualC = (reprovadosC / C * 100).toFixed(2);
let percentualD = (reprovadosD / D * 100).toFixed(2);
let percentualGeral = (reprovadosGeral / (C + D) * 100).toFixed(2);

console.log(`Percentual de alunos reprovados em C: ${percentualC}%`);
console.log(`Percentual de alunos reprovados em D: ${percentualD}%`);
console.log(`Percentual de alunos reprovados no geral: ${percentualGeral}%`);