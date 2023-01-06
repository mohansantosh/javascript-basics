const express = require('express');  
const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUI = require('swagger-ui-express');
const generateRouters = require('./controllers/router');
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
  

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