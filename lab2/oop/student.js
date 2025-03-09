class User {
    _tel = "";
    #age = 0;

    constructor(name) {
        this.name = name
    }

    set age(age) {
        if (!Number.isInteger(age) || age < 1 || age > 100) {
            alert('Incorrect age!')
            return
        }
        this.#age = age
    }

    get age() {
        return this.#age
    }

    set tel(phone_number) {
        if (phone_number.length != 12 || phone_number.slice(0, 2) != "+7" 
            || phone_number.slice(2).match(/^[0-9]+$/) == null) {
            alert('Incorrect phone number!')
            return
        }
        this._tel = phone_number
    }

    get tel() {
        return this._tel
    }

    hello() {
        console.log(`Hi! My name is ${this.name}.\nAnd I am ${this.#age} years old.\nMy phone is: ${this._tel}`)
    }
}

class Student extends User {
    #knowledge = 0

    constructor(name, age) {
        super(name)
        super.age = age
    }

    hello() {
        console.log(`Hi! My name is ${this.name}.\n And I am ${super.age} years old.\nAnd i am a student!`)
    }

    learn() {
        this.#knowledge += 1
    }

    get knowledge() {
        return this.#knowledge
    }
}

user1 = new Student("Roman", 20)
user1.learn()
user1.hello()
console.log(user1.knowledge)