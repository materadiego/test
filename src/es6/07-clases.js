class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user("Diego", 30);
console.log(bebeloper1.age);
console.log((bebeloper1.uAge = 31));
console.log(bebeloper1.age);
