const prompt = require('prompt-sync')();

function fatorial(n) {
  if (n < 0) throw new Error("Número inválido");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log(`Cache usado para: ${args}`);
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

while (true) {
  const entrada = prompt("Digite um número inteiro (ou 'sair' para encerrar): ");
  if (entrada.toLowerCase() === "sair") break;

  const numero = Number(entrada);
  if (isNaN(numero)) {
    console.log("Valor inválido.");
    continue;
  }

  try {
    const resultado = fatorialMemo(numero);
    console.log(`Fatorial de ${numero} é ${resultado}`);
  } catch (erro) {
    console.log("Erro:", erro.message);
  }
}
