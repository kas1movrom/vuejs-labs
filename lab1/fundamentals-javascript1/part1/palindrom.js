function palinrom(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

function palindrom(str) {
    array = str.split('');
    return array === array.reverse();
}

let str = prompt("Enter string:");

if (palinrom(str)) {
    alert('Yes')
} else {
    alert('No')
}

