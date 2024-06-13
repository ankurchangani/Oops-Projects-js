class Employee {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

let emp = new Employee("sanjay", "patel", 25);

document.getElementById("Employee").innerHTML = `Employee Details  <br/>  Firstname: ${emp.firstname} <br/> Lastname: ${emp.lastname} <br/> Age: ${emp.age}`;