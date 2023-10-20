const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "\\input.txt")
  .toString()
  .trim();
//let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");

let n_arr = input[1].split(" ").map((item) => Number(item));
let m_arr = input[3].split(" ").map((item) => Number(item));

let n_map = n_arr.reduce((acc, curr) => {
  if (!acc[curr]) acc[curr] = 1;
  else acc[curr]++;
  return acc;
}, {});

let answer = [];

m_arr.forEach((item) => {
  if (!n_map[item]) answer.push(0);
  else answer.push(n_map[item]);
});

console.log(answer.join(" "));
