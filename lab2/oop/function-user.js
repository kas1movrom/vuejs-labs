function User(name, age) {
    this.name = name
    this.age = age

    this.hello = function() {
        console.log(`Hi! My name is ${this.name}.\nAnd I am ${this.age} years old.`)
    }
}

let person = new User("Roman", 20)
person.hello()