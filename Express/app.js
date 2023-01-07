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
    components: {
      securitySchemes: {
          bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
          }
      }
    },
    security: [{
      bearerAuth: []
    }]
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


