var express = require("express");
var router = express.Router();
var { validationResult } = require('express-validator');
const createEmployeeInfoSchema = require("./employees_info.schema")
const Employee = require("../../models/index")["Employee"]; 
const EmployeeInfo = require("../../models/index")["EmployeeInfo"];

var validateSchema = require("./../../middleware/validateSchema");
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
router.post("/", validateSchema(createEmployeeInfoSchema), async (request, response) => {
    let errors = validationResult(request);
    if(!errors.isEmpty()) {
        response.status(422).json({errors: errors.array()});
    } else {
        try{
            let employee = await Employee.create({
                employeeId: request.body.employeeId
            })
            const {employeeInfo} = request.body;
            let employeeInfoObj = await employee.createEmployeeInfo(employeeInfo);

            response.status(201).send({
                id: employee.id,
                employeeId: employee.employeeId,
                employeeInfo: employeeInfoObj
            });
        } catch(error){
            response.status(400).send(error.errors);
        }
    }
})



/** 
 * @openapi 
 * /employee_info/{id}: 
 *   get: 
 *     tags: 
 *      - EmployeeInfo
 *     description: Get employee info by id
 *     parameters:
 *          - in: path
 *            name: id
 *            example: test-123
 *            schema:
 *              type: string
 *     responses:  
 *       200: 
 *         description: Get employees info by id  
 *   
 */  
 router.get("/:id", async (request, response) => {
    let errors = validationResult(request);
    if(!errors.isEmpty()) {
        response.status(422).json({errors: errors.array()});
    } else {
        try{
            let employeeId = request.params.id;
            let employeeInfo = await Employee.findOne({
                where: {
                    employeeId: employeeId
                },
                include: EmployeeInfo
            })
            if(!employeeInfo) {
                response.status(404).send({
                    error: "user not found"
                });
            }
            response.status(201).send({
                id: employeeId,
                employeeInfo: employeeInfo.EmployeeInfo
            });
        } catch(error){
            response.status(400).send(error.errors);
        }
    }
})


module.exports = router;