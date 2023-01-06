var express = require("express");
var router = express.Router();
var { check, validationResult, va } = require('express-validator');
const createEmployeeSchema = require("./employees.schema")
const Employee = require("../../models/index")["Employee"]; 

var validateSchema = require("./../../middleware/validateSchema");
/** 
 * @openapi 
 * /employee: 
 *   post: 
 *     summary: Register Employee
 *     description: Register Employee
 *     requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateEmployeeInput'
 *     responses:  
 *       201: 
 *         description: Created  
 *   
 */  
router.post("/", validateSchema(createEmployeeSchema), async (request, response) => {
    let errors = validationResult(request);
    if(!errors.isEmpty()) {
        response.status(422).json({errors: errors.array()});
    } else {
        try{
            let user = await Employee.create({
                employeeId: request.body.employeeId
            })
            response.status(201).send({
                id: user.id,
                employeeId: user.employeeId
            });
        } catch(error){
            response.status(400).send(error.errors);
        }
    }
})


module.exports = router;