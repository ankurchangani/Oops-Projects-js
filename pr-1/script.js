// Create a School class and create a student , faculty and peon method and student name email contact print same as faculty and peon using class & object.


class School {
    student(name, contact, email) {
        

        document.getElementById("sn").innerHTML += `Student name is :- ${name}<br> `;
        document.getElementById("sc").innerHTML += `Student contact no is :- ${contact}<br>`;
        document.getElementById("se").innerHTML += `Student email is :- ${email}<br>`;
        
    }   
    faculty(name, contact, email) {
      

        document.getElementById("fn").innerHTML += `Faculty name is :- ${name}<br>`;
        document.getElementById("fc").innerHTML += `Faculty contact no is:- ${contact}<br>`;
        document.getElementById("fe").innerHTML += `Faculty email is :- ${email}<br>`;
    }

    
    peon(name, contact, email) {

        document.getElementById("pn").innerHTML += ` Peon name is :- ${name}<br>`;
        document.getElementById("pc").innerHTML += ` Peon contact no is :- ${contact}<br>`;
        document.getElementById("pe").innerHTML += ` Peon email is :- ${email}<br>`;
    }

}

let school = new School();

school.student("Ankur", 8980285773, "changaniankur100@gmail.com");
school.faculty("keyur", 8980287374, "keyur@gmail.com");
school.peon("RajuBhai", 9726805697, "Raj123@gmail.com");

