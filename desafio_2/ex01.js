const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;

  const diasNoMes = [
    31,
    ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) ? 29 : 28,
    31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  return dia <= diasNoMes[mes - 1];
}

const dia = Number(prompt("Digite o dia: "));
const mes = Number(prompt("Digite o mês: "));
const ano = Number(prompt("Digite o ano: "));

if (ehDataValida(dia, mes, ano)) {
  console.log("Data válida!");
} else {
  console.log("Data inválida!");
}
