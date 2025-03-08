function split(str) {
    return (str.split(',')).join('.');
}


let str = prompt('Enter words with ,:');
alert(split(str))