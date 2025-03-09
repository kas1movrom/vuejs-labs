class User {
    _tel = "";

    constructor(name, age) {
        this.name = name
        this.age = age
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
        console.log(`Hi! My name is ${this.name}.\nAnd I am ${this.age} years old.\nMy phone is: ${this._tel}`)
    }
}

user1 = new User("Roman", 20)
user1.tel = "+79854832972"
console.log(user1.tel)

user1.hello()