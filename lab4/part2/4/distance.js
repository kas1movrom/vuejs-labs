function distance(arg1, arg2, arg3, arg4) {
    let x1, y1, x2, y2;

    if (arguments.length === 4) {
        x1 = arg1;
        y1 = arg2;
        x2 = arg3;
        y2 = arg4;
    } else if (arguments.length === 2) {
        x1 = arg1.x;
        y1 = arg1.y;
        x2 = arg2.x;
        y2 = arg2.y;
    } else {
        throw new Error('Invalid arguments');
    }

    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(distance(0, 0, 3, 4)); 
console.log(distance({x: 0, y: 0}, {x: 3, y: 4}));