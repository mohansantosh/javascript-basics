'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var db = {};
var sequelize;

var dbConnObj = {
  "username": "codex",
  "password": "default@123",
  "database": "codexTestDb",
  "host": "localhost",
  "dialect": "mysql"
};
sequelize = new Sequelize(dbConnObj.database, dbConnObj.username, dbConnObj.password, dbConnObj);
fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
  .forEach(file => {
    console.log(file)
    var model = require(path.join(__dirname, file))(sequelize, Sequelize)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
