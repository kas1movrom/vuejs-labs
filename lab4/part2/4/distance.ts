type Point = {
  x: number;
  y: number;
};

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;

function distance(arg1: number | Point, arg2?: number | Point, arg3?: number, arg4?: number): number {
  let x1: number, y1: number, x2: number, y2: number;

  if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'number' && typeof arg4 === 'number') {
      x1 = arg1;
      y1 = arg2;
      x2 = arg3;
      y2 = arg4;
  } else if (typeof arg1 === 'object' && typeof arg2 === 'object' && arg1 !== null && arg2 !== null) {
      x1 = (arg1 as Point).x;
      y1 = (arg1 as Point).y;
      x2 = (arg2 as Point).x;
      y2 = (arg2 as Point).y;
  } else {
      throw new Error('Invalid arguments');
  }

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(distance(0, 0, 3, 4)); 
console.log(distance({x: 0, y: 0}, {x: 3, y: 4})); 