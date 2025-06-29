const prompt = require('prompt-sync')();

function jogoAdivinhacao() {
  const numero = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let palpite = null;

  console.log("Tente adivinhar o número de 1 a 100!");

  while (palpite !== numero) {
    palpite = Number(prompt("Seu palpite: "));
    tentativas++;

    if (palpite > numero) {
      console.log("Mais baixo!");
    } else if (palpite < numero) {
      console.log("Mais alto!");
    } else {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
    }
  }
}
50
jogoAdivinhacao();
