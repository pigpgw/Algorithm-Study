const fs = require('fs');
//let input = fs.readFileSync(__dirname + '//input.txt').toString();
let input = fs.readFileSync(__dirname + '\\input_math.txt').toString();//.trim();


const inputValue = input.split(' ');
const a = inputValue[0];
const b = inputValue[1];

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a,b) {
    return a * b / gcd(a,b);
}

console.log(lcm(a, b)); 