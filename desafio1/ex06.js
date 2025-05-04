const prompt = require('prompt-sync') ();

console.log("veja se um triângulo é isósceles, escaleno ou equilátero")

let ladoA = Number(prompt("Digite o tamanho do lado A do triângulo: "))
let ladoB = Number(prompt("Digite o tamanho do lado B do triângulo: "))
let ladoC = Number(prompt("Digite o tamanho do lado C do triângulo: "))

if ((ladoA == ladoB && ladoA != ladoC) || (ladoA == ladoC && ladoA != ladoB) || (ladoB == ladoC && ladoB != ladoA)) {
    console.log("Triângulo isósceles: possui dois lados iguais")

} else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
    console.log("Triângulo escaleno: possui todos os lados diferentes")

} else {
    console.log("Triângulo eqüilátero: possui todos os lados iguais")
}