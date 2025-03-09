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

user1 = new User('Roman', 20)
user1.age = 30
user1.hello()