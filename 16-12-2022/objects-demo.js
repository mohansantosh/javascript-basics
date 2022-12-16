Write an object "rectangle"  that contains:
1. method printPerimeter() => print the perimeter of the rectangle
2. method updateLength(length) => update the length property of the rectangle object
3. method updateBreath(breath) => update the breath property of the rectangle object
4. method printArea() =>  prints the area of the rectanglel
5. property length => length of the rectangle
6. property breath => breath of the rectangle



Write an object "circle"  that contains:
1. method printCircumfurance()) => print the perimeter of the rectangle
2. method updateRadius(length) => update the length property of the rectangle object
3. method printArea() =>  prints the area of the rectanglel
4. property radius => length of the rectangle


printArea() function that can be used for both circle and rectangle objects.

// let rectangle = {}

// length = 10

// breath  = 20
// rectangle.printPerimeter() => 2*(length + breath) => 2*(10+30) => 80 
// rectangle.updateLength(20)
// length = 20
// rectangle.printPerimeter() =>  print the updated perimeter => 2(20+30) =>100
// rectangle.updateBreath(10);
// breath = 10
// rectangle.printPerimeter() =>  print the updated perimeter => 2(20+10) => 60

// rectangle.printArea() => print area of the ractangle => length * breath => 200
let rectangle = {
    length: 20,
    breath: 30
}


let cirle = {
    radius: 10
}

function getArea() {
    if(this.length && this.breath) {
        return (this.length*this.breath);
    }

    if(this.radius) {
        return getAreaCirle(this.radius)
    }
}

function getAreaCirle(radius){
    return (3.14*radius*radius);
}

function getAreaRectangle(){

}

rectangle.getArea = getArea; // assigning a function to an object

cirle.getArea = getArea;

console.log(cirle.getArea());
