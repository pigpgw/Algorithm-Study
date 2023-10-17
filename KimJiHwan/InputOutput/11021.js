const fs = require('fs');
let inputData = fs.readFileSync('dev/stdin').toString().split('/n');

for(let i = 1; i <= inputData[0]; i++){
    let a = inputData[i].split(' ');

    console.log(`case #${i}: ${parseInt(a[0]) + parseInt(a[1])}`);
}