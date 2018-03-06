class Person {
  constructor(name = 'test', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name = 'student', age = 18, major = 'Undecided') {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return this.major != 'Undecided';
  }
  getDescription(){
    let description = super.getDescription();

    if(this.hasMajor()){
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting(){
    var greeting = super.getGreeting();
    if (!!this.homeLocation){
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Student('Daniel Anderson', 28, 'Computer Science');

console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());

const you = new Student();
console.log(you);
console.log(you.hasMajor());
console.log(you.getDescription());

const traveler = new Traveler('Eric Clarke', 27, 'Chicago');
console.log(traveler.getGreeting());
