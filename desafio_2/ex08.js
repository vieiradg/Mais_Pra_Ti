const prompt = require('prompt-sync')();

function agruparPorCliente(vendas) {
  return vendas.reduce((acum, venda) => {
    acum[venda.cliente] = (acum[venda.cliente] || 0) + venda.total;
    return acum;
  }, {});
}

const vendas = [];
const quantidade = Number(prompt("Quantas vendas deseja registrar? "));

for (let i = 0; i < quantidade; i++) {
  const cliente = prompt(`Nome do cliente da venda ${i + 1}: `);
  const total = Number(prompt(`Valor da venda ${i + 1}: R$ `));
  vendas.push({ cliente, total });
}

const resultado = agruparPorCliente(vendas);

console.log("\n Totais por cliente:");
console.log(resultado);
