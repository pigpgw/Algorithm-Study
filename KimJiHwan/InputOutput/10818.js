const fs = require("fs");
let inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

let sortData = inputData[1].split(' ').map(num => parseInt(num));

let maxData = sortData[0];
let minData = sortData[0];

for(let i = 0; i < sortData.length; i++){
    if(maxData > sortData[i]){
        maxData = sortData[i];
    } else if(minData < sortData[i]){
        minData = sortData[i];
    }
}

console.log(`${maxData} ${minData}`);