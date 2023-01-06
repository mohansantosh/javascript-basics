const {object, string} = require("zod")

/**
 * @openapi
 * components:
 *  schemas:
 *      CreateEmployeeInput:
 *          type: object
 *          title: Employee
 *          required:
 *              - employeeId
 *          properties:
 *              employeeId:
 *                  type: string
 *                  example: user-1234
 */
const createEmployeeSchema = object({
    body: object({
        employeeId: string({
            required_error: "id is required"
        }).min(6, "EmployeeId is too short")
    })
});

module.exports = createEmployeeSchema;