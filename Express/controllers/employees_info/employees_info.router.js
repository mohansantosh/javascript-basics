var express = require("express");
var router = express.Router();

const Employee = require("../../models/index")["Employee"];
const EmployeeInfo = require("../../models/index")["EmployeeInfo"];
const createEmployeeInfoSchema =require("./employees_info.schema");

const validateSchema = require("../../middleware/validateSchema");


/** 
 * @openapi 
 * /employee_info: 
 *   post: 
 *     tags: 
 *      - EmployeeInfo
 *     description: Register Employee
 *     requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateEmployeeInfoInput'
 *     responses:  
 *       201: 
 *         description: Created  
 *   
 */
router.post("/", validateSchema(createEmployeeInfoSchema), async(request, response) => {
    try{
        let employee = await Employee.create({
            employeeId: request.body.employeeId
        });
        const {employeeInfo} = request.body;
        // const employeeInfo = request.body.employeeInfo both are same
        let employeeInfoObj = await employee.createEmployeeInfo(employeeInfo);

        response.status(201).send({
            emplyoeeId: employee.employeeId,
            employeeInfo: employeeInfoObj
        });
    } catch(error){
        response.status(500).send({
            error: error.errors
        })
    }
})

/**
 * @openapi
 * /employee_info/{employeeId}:
 *  get:
 *      tags:
 *         - EmployeeInfo
 *      description: Get employee information by employee Id
 *      parameters:
 *          - in: path
 *            name: employeeId
 *            example: user-123
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *            description: Successfully fetched the employee info
 */
router.get("/:employeeId", async (request, response) => {
    try{
        let employeeId = request.params.employeeId;
        let employeeInfo = await Employee.findOne({
            where: {
                employeeId: employeeId
            },
            include: EmployeeInfo
        });

        if(!employeeInfo) {
            response.status(404).send({
                error: "User not found"
            });
        } else {
            response.status(200).send({
                employeeId: employeeId,
                employeeInfo: employeeInfo.EmployeeInfo
            });
        }
    } catch(error) {
        response.status(500).send({
            error: error.errors
        })
    }
})


module.exports = router;