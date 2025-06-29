const prompt = require('prompt-sync')();

function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const quantidade = Number(prompt("Quantos pares deseja inserir? "));
const pares = [];

for (let i = 0; i < quantidade; i++) {
  const chave = prompt(`Chave ${i + 1}: `);
  const valor = prompt(`Valor ${i + 1}: `);
  pares.push([chave, valor]);
}


const obj = paresParaObjeto(pares);
console.log("\nObjeto criado:");
console.log(obj);


const paresNovos = objetoParaPares(obj);
console.log("\nObjeto convertido de volta para pares:");
console.log(paresNovos);

