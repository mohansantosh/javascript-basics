function Employee(name, id, isActive) {
    this.name = name;
    this.employeeId = id;
    this.isActive = isActive != undefined ? isActive : true; 
    //Employee name is nZSFRHx and employee id is 3"
    // this.printEmployeeInfo = function(){
    //     return ("Employee name is " + this.name + " and employee id is " + this.employeeId);
    // } = 700KB
}


function printEmployeeInfo() {
    console.log ("Employee name is " + this.name + " and employee id is " + this.employeeId );
}

Employee.prototype.printEmployeeInfo = printEmployeeInfo;
Employee.prototype.department = "HR";

let mohanInfo = new Employee("Mohan", 1, true);
let santoshInfo = new Employee("Santosh", 1, true);

console.log(mohanInfo, santoshInfo);

mohanInfo.printEmployeeInfo()
santoshInfo.printEmployeeInfo();

if(mohanInfo.printEmployeeInfo == santoshInfo.printEmployeeInfo){
    console.log("Both are same");
} else {
    console.log("Both are NOT same")
}

// console.log("My Age:", mohanInfo.myAge);

// Function.prototype.myAge = 27;

Object.prototype.myAge = 27
function calculateMyAge (){
    console.log(this.myAge);
}


