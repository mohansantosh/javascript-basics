
// 1. Write a program to create an array of employee objects of size 50. 
//     a. Each employee contains id, name and isActive: false|true info; default value of isActive is true.
//     {
//         id: 101,
//         name: "QEESrdh",
//         isActive: true
        
//     }
//     b. Assume that employees id of 1st employee is 101 and id of 50th employee is 150
//     c. Names of the 50 employees = 
    //     [
    //     'QEESrdh', 'dgeoOhh', 'CQGbdOe', 'nZSFRHx',
    //     'NkyGZNh', 'htWZpfg', 'yKHlEwN', 'dJOgvsv',
    //     'vDylvRp', 'OEBPxou', 'LeTzqVn', 'lxtkSTR',
    //     'fumsfTU', 'MgGavgT', 'BOcxLaR', 'vpCfgJT',
    //     'yvXJutE', 'KJVKTEB', 'gUsLbOu', 'bxWRsPJ',
    //     'xGuLSoA', 'JhzxlLw', 'qAEqFKQ', 'goxmWKv',
    //     'VcsdIIC', 'CTfFwLM', 'VoOWTTJ', 'DQGLdIi',
    //     'TKmPvnR', 'wMCUhmT', 'KxwPwBH', 'FTyuLqO',
    //     'pVQSAHt', 'mrUCQME', 'KeCzbeA', 'KkJVRxn',
    //     'ilZsThS', 'NbDzPAK', 'GQoxlBH', 'TTTiclk',
    //     'sAwzluT', 'qNsgmen', 'nzonRyg', 'uTwTsmc',
    //     'odPQbNe', 'DmuGZAZ', 'TrlzZrA', 'ZIlbHFl',
    //     'PBQiluU'
    // ]
// Extend above program to implement below functions
//     2. Prints employee info as "Employee name is nZSFRHx and employee id is 3";
//         employees[3].printEmployeeInfo() => difference versions to implement this using concept called 'proto'
//     3. Get all the employee names with even number id
//         employees.getEmpWithEvenIds() => return [employee Objects]
//     4. Add an employee in the employees list and list is should always sorted by id;
//         employees.addEmployee(new Employee(200, "Mohan", false)) 
//     5. Delete an employee from all employees list return true if success; false if failure(employee is not found)
//         employees.deleteEmployeeById(200);
//     6. Get all active employees as an array:
//         employees.getActiveEmployees();
    // 7. A custom filter function that iterates only through active employees
    //     employees.customActiveFilter((activeEmployee) => {
    //         return activeEmployee.name == "Mohan"
    //     })

//array that stores the names of all the employees
let allEmployeeNames = [
    'QEESrdh', 'dgeoOhh', 'CQGbdOe', 'nZSFRHx',
    'NkyGZNh', 'htWZpfg', 'yKHlEwN', 'dJOgvsv',
    'vDylvRp', 'OEBPxou', 'LeTzqVn', 'lxtkSTR',
    'fumsfTU', 'MgGavgT', 'BOcxLaR', 'vpCfgJT',
    'yvXJutE', 'KJVKTEB', 'gUsLbOu', 'bxWRsPJ',
    'xGuLSoA', 'JhzxlLw', 'qAEqFKQ', 'goxmWKv',
    'VcsdIIC', 'CTfFwLM', 'VoOWTTJ', 'DQGLdIi',
    'TKmPvnR', 'wMCUhmT', 'KxwPwBH', 'FTyuLqO',
    'pVQSAHt', 'mrUCQME', 'KeCzbeA', 'KkJVRxn',
    'ilZsThS', 'NbDzPAK', 'GQoxlBH', 'TTTiclk',
    'sAwzluT', 'qNsgmen', 'nzonRyg', 'uTwTsmc',
    'odPQbNe', 'DmuGZAZ', 'TrlzZrA', 'ZIlbHFl',
    'PBQiluU'
];

// array that stores employee objects;
let allEmployees = [];

/**
 * Constructor function to create employee objects
 * @param {*} name - name of the employee
 * @param {*} id - employee id
 * @param {*} isActive - status to check whether the employee is working in the company or not.
 */
function Employee(name, id, isActive) {
    this.name = name;
    this.employeeId = id
    this.isActive = isActive != undefined ? isActive : true;
    //Employee name is nZSFRHx and employee id is 3"
    this.printEmployeeInfo = function(){
        return ("Employee name is " + this.name + " and employee id is " + this.employeeId);
    }
}

// let myInfo = new Employee("Mohan", 1, true);
//The above constructor function get transformed as below and get excecuted
//The below function creates and temperory objecy, say tmpObject, and uses this object
//to associates/assigns the properties and methods for that object and returns the tmpObjectl

// function employeeTmp(name, id, isActive) {
//     let tmpObject = {}
//     tmpObject.name = name;
//     tmpObject.employeeId = id
//     tmpObject.isActive = isActive != undefined ? isActive : true;
//     //Employee name is nZSFRHx and employee id is 3"
//     tmpObject.printEmployeeInfo = function(){
//         return ("Employee name is " + this.name + " and employee id is " + this.employeeId);
//     }
//     return tmpObject
// }

//Create a function that creates array of employee objects
/**
 * 
 * @param {*} allEmployeeName =  List of employee names
 */
function createEmployeeList(allEmployeeName) {
    for(employeeIndex = 0; employeeIndex < allEmployeeName.length; employeeIndex++){
        let employeeObject = new Employee(allEmployeeName[employeeIndex], 101 + employeeIndex);
        allEmployees.push(employeeObject);
    }
}

createEmployeeList(allEmployeeNames);

function addEmployee(employeeObject) {
    this.push(employeeObject);
    this.sort((employee1, employee2) => {
        return employee1.employeeId - employee2.employeeId;
    })
}
allEmployees.addEmployee = addEmployee;

 /**
  * 
  * @returns array of employee objects whose employeeId is an even number
  */
function getEmpWithEvenIds(){
    return this.filter((employee) => {
        return (employee.employeeId % 2 == 0)
    })
}

allEmployees.getEmpWithEvenIds = getEmpWithEvenIds;

function deleteEmployeeById(employeeId){
    //Iterate through allEmployees List
    //Find the employee in the allEmployees list matching with the input paremeter 'employeeId'
    //If found, delete that employee from the list and return TRUE
    // Else, return false

    let employeeFoundIndex  = this.findIndex((employee) => employee.employeeId == employeeId)

    if(employeeFoundIndex > -1){
        this.splice(employeeFoundIndex, 1)
        return true;
    } else {
        return false;
    }

    // for(let employeeIndex = 0; employeeIndex < this.length; employeeIndex++){
    //     //matching employee with employeeId is found
    //     if(this[employeeIndex].employeeId == employeeId){

    //         //deletes an element from an array at index and of size n
    //         //this.splice(index, size)
    //         this.splice(employeeIndex, 1);
    //         return true;
    //     }
    // }

    // return false;
}

allEmployees.deleteEmployeeById = deleteEmployeeById;

let employeeDeleteStatus = allEmployees.deleteEmployeeById(102);

/**
 * 
 * @param {*} callBackFn = Takes a function that will be executes on only active employees in the array
 * @return = array of employee objects that satisfies the callback fn condition 
 */

function customActiveFilter(callBackFn){
    let result = [];

    for(let employeeIndex = 0; employeeIndex < this.length; employeeIndex++){
        if(this[employeeIndex].isActive == true && callBackFn(this[employeeIndex]) ==  true){
                result.push(this[employeeIndex]);
        }
    }

    return result;
}

allEmployees.customActiveFilter = customActiveFilter;

function getActiveEmpWithEvenIds(){
    return this.customActiveFilter((employee) => {
        return (employee.employeeId % 2 == 0)
    })
}

allEmployees.getActiveEmpWithEvenIds = getActiveEmpWithEvenIds;

console.log(allEmployees.getActiveEmpWithEvenIds());


let myInfo = new Employee("Mohan", 1, true);
let myInfo1 = new Employee("Mohan", 1, true);
console.log("myInfo", myInfo);
console.log("myInfo1", myInfo1);

let myInfo3 = {} //  assign the address, or object by reference


Object.assign(myInfo3, myInfo1)


if(myInfo3 == myInfo1){
    myInfo3.name = "Santosh"
    console.log("Both the objects are same");
    console.log("myInfo3", myInfo3.name);
    console.log("myInfo1", myInfo1.name);
} else {
    console.log("Both are not same");
}

// RAM + CPU
// myInfo = 0x00001 => {
//     name: "Mohan",
//     employeeId: 1,
//     isActive: true
// }

// myInfo2 = 0x00002 => {
//     name: "Mohan",
//     employeeId: 1,
//     isActive: true
// }

// let myInfo3 = myInfo1;

// myInfo3 = 0x00001
// myInfo1 = 0x00001

// if(myInfo3 == myInfo1){
//     console.log("Both the objects are same");
// } else {
//     console.log("Both are not same");
// }


