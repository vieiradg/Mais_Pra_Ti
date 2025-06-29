const prompt = require('prompt-sync')();

function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function salvarBusca(termo) {
  console.log(`🔍 Buscando por: "${termo}"`);
}

const salvarBuscaDebounce = debounce(salvarBusca, 1000);

console.log("Digite alguns termos rapidamente (simulação de digitação):");

const termos = ['j', 'ja', 'jav', 'java', 'javasc', 'javascript'];

for (let i = 0; i < termos.length; i++) {
  salvarBuscaDebounce(termos[i]);
}
