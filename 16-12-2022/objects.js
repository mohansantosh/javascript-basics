// Write an object that contains methods
// 1. printPerimeter
// 2. updateLength(length)
// 3. updateBreath(breath)
// 4. printArea


let object = {
    length: 20,
    breath: 30,

    printPerimeter: function() {
        console.log(2*(this.length + this.breath))
    },

    updateLength(length) {
        this.breath = length;
    },

    updateBreath(breath) {
        this.breath = breath;
    },

    printArea() {
        console.log(this.length*this.breath);
    }
}

// let obj1 = object;
// let obj2 = object;

// obj2.length = 20
// if(obj1 == obj2){
//     console.log("equal")
// }

object.printArea();
object.updateLength(10)
object.printArea();
object.printPerimeter();

// let object = {
//     length: 20,
//     breath: 30
// }

// function printArea(){
//     if(this.radius) {
//         console.log(3.14*this.radius*this.radius);
//     }
//     else if(this.length && this.breath){
//         console.log(this.length * this.breath);
//     }
// }

// object.printArea = printArea;

// let objectCircle = {
//     radius: 25
// }

// objectCircle.printArea = printArea;
// objectCircle.printArea()