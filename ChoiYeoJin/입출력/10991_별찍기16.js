const fs = require('fs');
let input = fs.readFileSync(__dirname + '\\input.txt').toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

input = Number(input);

for (let i = 1; i < input+1; i++){
    console.log( ' '.repeat(input-i)  +'* '.repeat(i))
}
