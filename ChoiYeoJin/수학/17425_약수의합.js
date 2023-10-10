const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "\\input.txt")
  .toString()
  .trim();
//let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\r\n");
input = input.slice(1, input.length).map((item) => +item);

//console.log(input);

input.forEach((item) => {
  const arr = Array(item)
    .fill()
    .map((v, i) => i + 1);

  let sum = arr.reduce((acc, el) => {
    acc += getDivision(el).reduce((acc2, el2) => (acc2 += el2), 0);
    return acc;
  }, 0);

  console.log(sum);
});

function getDivision(num) {
  let div = [];

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      div.push(i);
    }
  }

  return div;
}
