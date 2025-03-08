function get_median1(...args) {
    let result = 0;

    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return (result / args.length);
}

function get_median2(...args) {
    tmp = [...args].sort(function compare(a, b) {
        if (Number(a) > Number(b)) return 1;
        if (Number(a) == Number(b)) return 0;
        if (Number(a) < Number(b)) return -1;
    });
    
    if (tmp.length % 2 == 0) {
        return (tmp[tmp.length / 2] + tmp[tmp.length / 2 - 1]) / 2;
    } else {
        return tmp[length / 2];
    }
}

alert(get_median1(1, 2, 3, 4, 5));
test = [1, 2, 3, 4, 5, 6];
alert(get_median1(...test));