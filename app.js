// Person constructor
function Person(firstName,lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const brad = new Person('Brad', 'Pitt', '8-12-90');
const mary = new Person('Mary', 'White', 'March 23 1978');

console.log(mary);

console.log(brad.calculateAge());


// console.log(Brad.age);

// const brad = new Person('Brad', '9-8-1981');
// console.log(brad.calculateAge());

// Class takes the function and simplify. Every method added inside the class stays on the prototype
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}