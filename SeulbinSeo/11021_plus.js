const fs = require('fs');
let input = fs.readFileSync(__dirname + '\\input.txt').toString();
//let input = fs.readFileSync('/dev/stdin').toString().trim();

for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' '); //5 6 => [0] = 5, [1] = 6
    console.log(numbers[0]);
    //console.log(`Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}`);
}