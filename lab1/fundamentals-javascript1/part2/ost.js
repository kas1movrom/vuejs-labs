// function five_ost(array) {
//     result = [];

//     for (num of array) {
//         result.push(num % 5);
//     }
//     return result;
// }

array = (prompt('Enter your list:')).split(' ');

function get_result(array) {
    result = []

    for (num of array) {
        result.push(Number(num) % 5);
    }
    return result;
}

alert((get_result(array)).join(' '))

// alert(five_ost([1, 2, 3, 4, 5]))