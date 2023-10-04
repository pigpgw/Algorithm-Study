//최대 공약수
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function loM(a,b) {
    return a * b / gcd(a,b);
}

console.log(gcd(40, 30));
console.log(loM(15, 3));

