const fs = require('fs');
//let input = fs.readFileSync(__dirname + '//input.txt').toString();
let input = fs.readFileSync(__dirname + '\\input_math.txt').toString();//.trim();

const inputValue = input.split(' ');
const a = inputValue[0];
const b = inputValue[1];

function make_num(num) {
    let rtn = 1;
    if(num === 1) return 1;
    else {
        for(let i = 1; i < num; i++) {
            rtn = (rtn * 10) + 1;
        }
    }
    return rtn;
}


function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

const num_a = make_num(a);
const num_b = make_num(b);

console.log(gcd(num_a, num_b));