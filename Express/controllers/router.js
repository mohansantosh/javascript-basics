let EmployeeRouter = require("./employees/employees.router");
let EmployeesInfoRouter = require("./employees_info/employees_info.router");
let User = require("./users/users.router");
let passport = require("../middleware/passport")

let mainRouter = function(expressApp) {
    expressApp.use('/employee', passport.authenticate('jwt', {session: false}),  EmployeeRouter);
    expressApp.use('/employee_info', EmployeesInfoRouter);
    expressApp.use('/user', User);
}

module.exports = mainRouter;