let EmployeeRouter = require("./employees/employees.router");
let EmployeesInfoRouter = require("./employees_info/employees_info.router");

let mainRouter = function(expressApp) {
    expressApp.use('/employee', EmployeeRouter);
    expressApp.use('/employee_info', EmployeesInfoRouter);
}

module.exports = mainRouter;