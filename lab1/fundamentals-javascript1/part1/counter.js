let Counter = {
    counter: 0,

    add: function(value) {
        this.counter += value;
    },

    sub: function(value) {
        this.counter -= value;
    },

    show_counter: function() {
        console.log("The value is: ", this.counter)
    }
}

Counter.add(Number(prompt("Enter the number:")))
Counter.show_counter()
