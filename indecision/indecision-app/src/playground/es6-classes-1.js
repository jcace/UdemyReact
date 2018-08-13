class Person {
  
  constructor(name = "Guy Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    // return 'Hi ' + this.name;
    return `Hi ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name,age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` and their major is ${this.major}`;
    }

    return description; 
  }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
      super(name,age);
      this.homeLocation = homeLocation;
    }

    getGreeting() {
      if (!!this.homeLocation) {
        let greeting = super.getGreeting();
        return greeting += ` I am visiting from ${this.homeLocation}`
      }
      else {
        return super.getGreeting();
      }
    }


}

const me = new Traveler('Jeremy Cioara', 45, 'Calgary');
console.log(me.getGreeting());


const other = new Traveler();
console.log(other.getGreeting());
