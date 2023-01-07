const express = require('express');  
const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUI = require('swagger-ui-express');
const generateRouters = require('./controllers/router');
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

// To show case the express usage
// Creating routes/endpoint for various tables
// What is an endpoint - REST API, that is exposed by express server using which any client can communicate.
// This application uses swagger as a tool that makes REST calls to our backend server.
// backserver = Swagger UI + REST APIS(exposes all the apis) on port no 4000
// Using sequelize, we are communicating with the mysql to do CRUD operations - CREATE/READ/UPDATE/DELETE
// Zod - it's an npm module - its a user input validator to verify if user is sending valid input or not - uses Schema concept.
// bodyParser - it's an npm module. Why? - to parse the user body and gives us an object and stores it  in request.body in express.

// Definition of creating a Router:
//Create a model - also create assications (one-to-one, one-to-many) - sequelize
//Create a route/endpoint/REST API - express
//Integrate with swagger - swagger
//Schema validation for the user input - zod
//Integrate with sequelize - Uses user input body and does CRUD operations on the tables - sequelize

//Create  Employee table - done

//07-Jan - Creating route for EmployeeInfo table
//Create EmployeeInfo Table - to-do
//Create one-to-one relationship - to-do

//Create Employee Address 
//Create one-to-many Relationshop

//POST API to create an address to an employee
//GET API by employeeID to get all employee address
//PATCH API to edit employee address by address id



// Create routes
//Create Project 
//Create many to many relationship between projects and employee

//Post call to assiciate an employee to an project
//Get all employeees associated to a project by project Id
// Get all projects of an employee by employee Id








//sync all the models
const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
    generateRouters(app);
  })
  .catch((err) => {
    throw new Error("Failed to sync db: " + err.message);
  });


const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version: "3.0.0"
    },
    security: [
      {
        bearerAuth: [],
      },
    ] 
  },
  apis:['./controllers/*/*.router.js', './controllers/*/*.schema.js'],
};


// const swaggerOptions = {  
//   swaggerDefinition: {  
//       openapi: "3.0.0",
//       info: {  
//           title:'Employee API',  
//           version:'3.0.0'  
//       }  
//   },  
//   apis:['./controllers/*/*.router.js',  './controllers/*/*.schema.js'],  
// }


const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));  
app.use('/api-docs.json',  (req,res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDocs);
})

app.listen(4000,()=>console.log("listening on 4000"));  


