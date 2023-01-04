//Database is must. Which we have to install - Mysql, sqlite, postgress RDMS - Done
//Create a connection to the database using Sequelize - Done
//To create any table in the database, create a Model in Sequelize. -Done
//Create Tables in the database using Sequelize - to-do
//Use Models that are associated to Tables to create/update/Read/delete - CRUD

const Sequelize = require('sequelize');
const crypto = require("crypto")
const connectionObj = {
    "username": "codex",
    "password": "default@123",
    "database": "codexTestDb",
    "host": "localhost",
    "dialect": "mysql"
};

let sequelize = new Sequelize(connectionObj.database, connectionObj.username, connectionObj.password, connectionObj);

let Employee = sequelize.define('Employee', {
        id: {
            primaryKey: true, 
            type: Sequelize.UUID
        },
        employeeId: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.fn('now')
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.fn('now')        
        }
    }, 
    {
        tableName: 'employees'
    }
)


let EmployeeInfo = sequelize.define('EmployeeInfo', {
    id: {
        primaryKey: true,
        type: Sequelize.UUID
    },
    firstName: {
        type:  Sequelize.STRING,
        allowNull: false
    },
    middleName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    panNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    aadharNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
    }
},
{
    freezeTableName: true,
    tableName: 'employees_info'
}
);

Employee.hasOne(EmployeeInfo);

async function createTables(){
    try{
        await sequelize.sync({force: true});
        console.log("Tables created in the database");
    } catch(error) {
        throw new Error(error);
    }
}


async function createEmployeeInfo() {
    try {
        let employeeInfo  = await EmployeeInfo.create({
            id: crypto.randomUUID(),
            firstName: "Mohan",
            middleName: "Santosh",
            lastName: "B",
            panNumber: "AS123SDF",
            aadharNumber: "43322930302"
        });
        return employeeInfo;

    } catch(error) {
        throw new Error(error);
    }
}

async function createEmployee(employeeId) {
    try{
        let employee = await Employee.create({
            id: crypto.randomUUID(),
            employeeId
        })
        return employee;
    } catch(error) {
        throw new Error(error);
    }
}

createTables()
.then(async (done) => {
    let employee = await createEmployee("MOHAN-MENTOR-123");
    let employeeInfo = await createEmployeeInfo();
    await employee.setEmployeeInfo(employeeInfo);
})
.catch((error) => {
    console.log("Error ", error);
})
.finally(() => {
    sequelize.close();
})
