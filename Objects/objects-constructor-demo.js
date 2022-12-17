
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


let myInfo = new Employee("Mohan", 1, false);
allEmployees.addEmployee(myInfo)

// console.log(allEmployees)

myInfo = allEmployees.customActiveFilter((employeeObj) => {
    return employeeObj.name == "Mohan"
})


// console.log(allEmployees);
// console.log(allEmployees[4].printEmployeeInfo());

