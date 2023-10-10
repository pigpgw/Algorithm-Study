const fs = require("fs");
const { basename } = require("path");
let input = fs.readFileSync(__dirname + "\\input.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split(" ").map((item) => BigInt(item));

const [a, b] = [Math.max(input), Math.min(input)];

function gcd(a, b) {
  if (b === BigInt(0)) return a;
  return gcd(b, a % b);
}

console.log("1".repeat(gcd(a, b)));
