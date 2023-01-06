const EmployeeRouter = require("./employees/employees.router");
const EmployeeInfoRouter  = require("./employees_info/employees_info.router"); 

let mainRouter = function(expressApp) {
    expressApp.use('/employee', EmployeeRouter);
    expressApp.use('/employee_info', EmployeeInfoRouter);
}

module.exports = mainRouter;