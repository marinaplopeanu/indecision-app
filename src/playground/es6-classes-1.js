//the goal is to use classes to reuse code. We are going to define a class and we'll be able to make multiple instances of that class for the individual items
// car
// make
// model
// vin
// getDescription

/*Just like we name our functions, just like we name our variables, we also name our classes 
Classes and components they start with upper case*/

/*when we make a new instance of a class we use the new keyword to tell js that we want to make a new instance. 
Then we provide the class name
- finally we open and close some parenthesis calling it as a function 
- we just pass in an argument, but we are not actually using it. 
- to do this, we are going to define the constructor function for the person class
!! the constructor function is the function that gets called when we make a new instance, and it's called with all of the arguments we pass in. So if we want to do something with the name, we have to define the constructor option.
        - the syntax is going to look weird
*/
class Person {
    //this is where we define our class
    //I can pass in the name as an argument
    constructor(name = 'Anonymous', age = '0') {
        console.log('test')
        //inside of class methods we access this. 
        //this refers to the class instance
        //in es6, not only we have access to classes syntax, we also have access to classes defaults. (=>these can be used in methods and classes, arrow functions, everywhere we set up an arguments list)
        this.name = name;
        this.age = age;
    }//never put a comma
    //here we define the next method
    getGreeting(){
        // return 'Hi. I am ' + this.name + '!';
        //es6 feature to return a template string. 
        return `Hi. I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old!`
    }

}

//create a subclass of person
//we can extend person from student. so we don't add name and age for student separately 
//we use extends as a key word to say that we want class student to extend an existing class Person
class Student extends Person {
    //we want to overwrite the constructor function so we can have add support for major. 
    constructor(name, age, major) {
        //we have to call the parent constructor function.
        //super refers to the parent class. In this case to the parent class of student: person. 
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
//if we add a method with the same name as the parent, we will overwrite the parent behaviour, and get the child's behaviour instead. 

    getDescription(){
        //this is how we get the description from parent
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        //we get the original greeting
        this.homeLocation = homeLocation;

    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}. `
        }
        return greeting
    }
}
// const me = new Person ('Marina Plopeanu', 30);
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getDescription());

const me = new Traveler('Marina Plopeanu', 30, 'Boston');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());


