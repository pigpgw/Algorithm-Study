const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "\\input.txt")
  .toString()
  .trim();
//let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\r\n");
input = input.slice(1);

input.forEach((item) => {
  let arr = Array.from(item);
  let stack = [];

  arr.forEach((el) => {
    stack.push(el);
    let len = stack.length;

    if (len > 1) {
      if (stack[len - 1] === ")" && stack[len - 2] === "(") {
        stack.pop();
        stack.pop();
      }
    }
  });

  if (stack.length != 0) console.log("NO");
  else console.log("YES");
});
