// function Employee(employeeId, name) {
//     this.employeeId = employeeId;
//     this.name = name;


//     this.printEmployeeInfo = function() {
//         console.log("The employee information is: " + this.employeeId + " " + this.name);
//     }
// }

// let employeeObj = new Employee(1, "Mohan");

// console.log(employeeObj);
// iPhone 14 pro (smaller)- Base class 

// iPhone 14 Pro max (bigger version); - Derived Class

// 1. Classes 
// 2. Dervied Classes from Base class so that you can reuse or inhert the functionality from Base class - Don't have to more countryIndex
// 3. Create Instances of class  (just like constructor functions)

class Vehicle {

    constructor(type, wheels){
        this.type = type;
        this.wheels = wheels;
    }

    printVehicleInformation() {
        console.log("The vehicle information is " + this.type + " with wheels " + this.wheels);
    }
    //static method
    static describleMyFunctionality() {
        console.log("This Vehicle class describes about the automobiles and stores the type and wheels of a brand")
    }
}

//inheritance
class Tata extends Vehicle {
    constructor(type, wheel, model) {
        super(type, wheel); // this will call the base class constructor
        this.model = model
    }

    updateTheModel(model) {
        this.model = model;
    }
    //overriding 
    printVehicleInformation() {
        console.log("Hi, I'm Tata Car. My vehicle information is " + this.type + " with wheels " + this.wheels + "and my model number is " + this.model);
    }
}

let tataCar = new Tata("Tata", 4, "Tiago"); // instances of the class Tata
tataCar.printVehicleInformation();
Vehicle.describleMyFunctionality(); // Calling static methods is only valid on classes.
console.log(tataCar);

// Object => Functions => tmp = new Function() =>  tmp.getValue();

// NULL => Object => Vehicle => Tata => let tataCar = new Tata("Tata", 4, "Tiago"); => tmp.printVehicleInformation()
// //tataCar = Vehicle fns + it's own functions

// console.log(tataCar);

class ModifedArray extends Array {
    isEmpty() {
        return this.length === 0;
      }
}
//NULL => Object => Array => ModifedArray => array = new ModifedArray(); => array.isEmpty();
let arr = new ModifedArray();
console.log(arr.isEmpty());



















