const prompt = require('prompt-sync')();

function fatorial(n) {
  if (n < 0) throw new Error("Número inválido");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

try {
  const numero = Number(prompt("Digite um número inteiro não negativo: "));
  const resultado = fatorial(numero);
  console.log(`Fatorial de ${numero} é ${resultado}`);
} catch (erro) {
  console.log("Erro:", erro.message);
}
