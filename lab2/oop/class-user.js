class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    hello() {
        console.log(`Hi! My name is ${this.name}.\nAnd I am ${this.age} years old.`)
    }
}

let user1 = new User("Roman", 20)
user1.hello()