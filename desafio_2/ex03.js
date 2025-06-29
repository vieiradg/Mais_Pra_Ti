const prompt = require('prompt-sync')();

function palavrasUnicas(frase) {
  const palavras = frase.split(" ");
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let repetida = false;
    for (let j = 0; j < palavras.length; j++) {
      if (i !== j && palavras[i] === palavras[j]) {
        repetida = true;
        break;
      }
    }
    if (!repetida) unicas.push(palavras[i]);
  }

  return unicas;
}

const entrada = prompt("Digite uma frase: ");
const resultado = palavrasUnicas(entrada);

console.log("Palavras únicas:", resultado);
