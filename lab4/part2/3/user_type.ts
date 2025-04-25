type UserType = {
  name: string;
  age: number;
  hello(): void;
};

class User implements UserType {
  constructor(public name: string, public age: number) {}

  hello(): void {
      console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
  }
}

const user = new User("Bob", 30);
user.hello(); 