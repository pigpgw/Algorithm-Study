const fs = require('fs');
let input = fs.readFileSync(__dirname + '\\input.txt').toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split('\n');
const nums = input[1].split(' ').map(item => +item);

console.log(Math.min(...nums) + ' ' + Math.max(...nums));