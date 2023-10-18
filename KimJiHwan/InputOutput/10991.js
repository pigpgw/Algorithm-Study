const fs = require('fs');
let inputData = fs.readFileSync(__dirname + "\\input.txt").toString();

let a = parseInt(inputData);

for(let i = 1; i <= a; i++){
    console.log(' '.repeat(a - i) + '* '.repeat(i));
}
