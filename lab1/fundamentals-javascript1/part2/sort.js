array = prompt('Enter the list: ').split(' ');

array.sort(function compare(a, b) {
    if (Number(a) > Number(b)) return 1;
    if (Number(a) == Number(b)) return 0;
    if (Number(a) < Number(b)) return -1;
})

alert(array.join(' '));

