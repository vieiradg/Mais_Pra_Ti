const prompt = require('prompt-sync') ();

let n1 = 0;
let n2 = 1;
let fibo;

console.log(n1); 
console.log(n2); 

for (let i = 3; i <= 10; i++) {
    fibo = n1 + n2;     
    console.log(fibo); 
    n1 = n2;               
    n2 = fibo;
}          
