const fs = require('fs');
let input = fs.readFileSync(__dirname + '\\input.txt').toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = [];
let i = 1;
input = input.split('\n');
input = input.slice(1, input.length).forEach(item => {
    let splited = item.split(' ').map(s => +s);
    answer.push(`Case #${i++}: ${splited[0] + splited[1]}`);
});

console.log(answer.join('\n'));



