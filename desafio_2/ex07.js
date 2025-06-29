const prompt = require('prompt-sync')();

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);
}

const produtos = [];
const quantidade = Number(prompt("Quantos produtos deseja adicionar? "));

for (let i = 0; i < quantidade; i++) {
  const nome = prompt(`Nome do produto ${i + 1}: `);
  const preco = Number(prompt(`Preço do produto ${i + 1}: `));
  produtos.push({ nome, preco });
}

const nomesOrdenados = nomesOrdenadosPorPreco(produtos);

console.log("\n Produtos ordenados por preço:");
console.log(nomesOrdenados);
