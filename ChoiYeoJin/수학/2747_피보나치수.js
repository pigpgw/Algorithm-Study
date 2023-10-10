const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "\\input.txt")
  .toString()
  .trim();
//let input = fs.readFileSync('/dev/stdin').toString().trim();

input = Number(input);

console.log(Fibonacci(1, 1, 1, input));

function Fibonacci(num1, num2, curr_cnt, max_cnt) {
  if (curr_cnt === max_cnt) return num1;
  return Fibonacci(num2, num1 + num2, ++curr_cnt, max_cnt);
}
