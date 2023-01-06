let EmployeeRouter = require("./employees/employees.router");

let mainRouter = function(expresApp) {
    expresApp.use('/employee', EmployeeRouter);
}

module.exports = mainRouter;