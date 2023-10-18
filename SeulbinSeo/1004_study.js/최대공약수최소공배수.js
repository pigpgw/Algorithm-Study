//최대 공약수
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a,b) {
    return a * b / gcd(a,b);
}

console.log(gcd(40, 30));
console.log(lcm(15, 3));

