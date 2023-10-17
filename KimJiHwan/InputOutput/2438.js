const fs = require('fs');
let inputData = fs.readFileSync(0, 'utf8').toString();

let count = parseInt(inputData);
let star = '';

for(let i = 1; i <= count; i++){
    for(let j = 1; j <= i; j++){
        star += '*';
    }
    star += '\n';
}

console.log(star);