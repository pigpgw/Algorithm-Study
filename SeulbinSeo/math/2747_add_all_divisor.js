const fs = require('fs');
let input = fs.readFileSync(__dirname + '\\input_math.txt').toString();
//let input = fs.readFileSync(__dirname + '\\input_math.txt').toString().trim();

const inputVal = input;
let result = 0;

function divisor_add_all_result(num) {
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            result += parseInt(i);
        }
    }
    return result;
}

console.log(divisor_add_all_result(inputVal));