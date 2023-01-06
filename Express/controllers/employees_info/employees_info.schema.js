const {object, string} = require("zod")

/**
 * @openapi
 * components:
 *  schemas:
 *      CreateEmployeeInfoInput:
 *          type: object
 *          title: EmployeeInfo
 *          required:
 *              - employeeId
 *              - employeeInfo
 *          properties:
 *              employeeId:
 *                  type: string
 *                  example: user-1234
 *              employeeInfo:
 *                  type: object
 *                  required:
 *                      - firstName
 *                      - lastName
 *                      - panNumber
 *                      - aadharNumber
 *                  optional:
 *                      - middleName
 *                  properties:
 *                      firstName:
 *                          type: string
 *                          example: "John"
 *                      middleName:
 *                          type: string
 *                          example: "Mathew"
 *                      lastName:
 *                          type: string
 *                          example: "Harrington"                       
 *                      panNumber:
 *                          type: string
 *                          example: "CESPM1225M"                       
 *                      aadharNumber:
 *                          type: string
 *                          example: "443254329870"                                 
 */
const createEmployeeInfoSchema = object({
    body: object({
        employeeId: string({
            required_error: "id is required"
        }).min(6, "EmployeeId is too short"),
        employeeInfo: object({
            firstName: string({
                required_error: "First name is required"
            }),
            middleName: string().optional(),
            lastName: string({
                required_error: "Last name is required "
            }),
            panNumber: string({
                required_error: "Pan number is required"
            }).length(10),
            aadharNumber: string({
                required_error: "Aadhar Number is required"
            }).length(12),
        })
    })
});


module.exports = createEmployeeInfoSchema;