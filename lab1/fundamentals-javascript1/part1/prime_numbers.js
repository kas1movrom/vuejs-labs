function isPrime(number) {
    for (let i = 2; i <= number ** 0.5; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

let num = Number(prompt('Enter the number:'));
let result = [];

for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
        result.push(i);
    }
}

alert(result.join(' '))