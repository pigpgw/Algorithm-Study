const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "\\input.txt")
  .toString()
  .trim();
//let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\r\n");
input = input.slice(1, input.length);

input.forEach((item) => {
  const [a, b] = item.split(" ").map((e) => +e);
  console.log(lcm(a, b));
});

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
