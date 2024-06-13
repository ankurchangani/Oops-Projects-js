// Create a Person class and with argument create a Father and Child method father age of 60 and child age of 20 print with argument.

class Person {
    constructor(age) {
        this.age = age; 
    }

    father(age) {
        this.age = age;
        document.getElementById("Father").innerHTML = `Father Age is : ${this.age}`;
    }

    child(age) {
        this.age = age;
        document.getElementById("child").innerHTML = `Child Age is : ${this.age}`;
    }
}

let person = new Person();

let fatherAge = 60;
person.father(fatherAge);

let childAge = 20;
person.child(childAge);
person.child(childAge);



