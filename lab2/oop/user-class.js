let User = {
    name: "Roman",
    age: 20,
    hello: function() {
        console.log(`Hi! My name is ${this.name}.\nAnd I am ${this.age} years old.`);
    }
}

User.hello()