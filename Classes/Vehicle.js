

class Vehicle {
    constructor(type, wheels){
        this.type = type;
        this.wheels = wheels;
    }

    isStandRequired(){
        return this.wheels > 2 ? false : true;  
    }

    isInsuranceRequired() {
        return this.wheels == 2 && this.type == "cycle" ? false :  true
    }

    printVehicleInfo() {
        console.log("I'm " + this.type + " and I've " + this.wheels + " wheels");
    }
    
    static describeClass() {
        console.log("This class acts a base class that can be extended to other class");
    }
}

class Car extends Vehicle {
    constructor(type, wheels, brand, model){
        super(type, wheels);
        this.brand = brand;
        this.model = model;
    }
    printVehicleInfo(){
        console.log("I'm" + " " + this.type + " and I've " + this.wheels + " wheels, " + "and my brand is " + this.brand + " and model " +  this.model);
    }
}

class Lorry extends Vehicle {
    constructor(type, wheels, brand, model) {
        super(type, wheels);
        this.brand = brand;
        this.model = model;
    }
}

class Cycle extends Vehicle {
    constructor(type, wheels, brand, model) {
        super(type, wheels);
        this.brand = brand;
        this.model = model;
    }
}

let tata = new Car("Car", 4, "Tata", "Tiago");
let lorry = new Lorry("Lorry", 8, "Ashok Leyland", "Bada Dost");
lorry.printVehicleInfo();
tata.printVehicleInfo();

function Employee(name, id) {
    this.name = name;
    this.id = id;

    this.printMyInfo = function() {
        console.log(this.name + this.id);
    };
}
// let heroCycle = new Cycle("cycle", 2, "Hero", "Speed");

// tata.printVehicleInfo();
// console.log(tata.isInsuranceRequired());

