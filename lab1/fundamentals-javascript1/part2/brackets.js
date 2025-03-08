function correct_bracket(bracket) {
    stack = [];

    for (let char of bracket) {
        if (char == "(") {
            stack.push(char);
        } else {
            if (stack.length == 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length == 0
}

brack = prompt('Enter brackets:');

if (correct_bracket(brack)) {
    alert("Corerct");
} else {
    alert("Incorrect");
}
