// 
// Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width*height) using with argument.


class Shape {


    circleArea(radius) {
        const area = 3.14 * radius * radius;
        document.getElementById ("circle").innerHTML = `Area of the circle: ${area}`

    }

    rectangleArea(width, height) {
        const area = width * height;
        document.getElementById ("rec").innerHTML = `Area of the rectangle: ${area}`
    }
}


const shape = new Shape();


shape.circleArea(5);
shape.rectangleArea(4, 6);

