const fs = require('fs');
let input = fs.readFileSync(__dirname + '\\input.txt').toString();
//let input = fs.readFileSync('/dev/stdin').toString().trim();

let inputnum = Number(input);

function MI(n) {
    if (n <= 1) {
        return n;
    } else if (n >= 2) {
        return MI(n - 1) + MI(n - 2);
    }
}

console.log(MI(10));