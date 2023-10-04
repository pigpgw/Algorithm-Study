const fs = require('fs');
let input = fs.readFileSync(__dirname + '\\input.txt').toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

for(let i = 0; i < input; i++) {
    console.log("*".repeat(i + 1));
}