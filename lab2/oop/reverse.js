Array.prototype.reverse = function() {
    return [...this].concat([...this])
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.reverse())