//Database is must. Which we have to install - Mysql, sqlite, postgress RDMS - Done
//Create a connection to the database using Sequelize - Done
//To create any table in the database, create a Model in Sequelize. -Done
//Create Tables in the database using Sequelize - to-do
//Use Models that are associated to Tables to create/update/Read/delete - CRUD

const Sequelize = require('sequelize');
const crypto = require("crypto");

const connectionObj = {
    "username": "codex",
    "password": "default@123",
    "database": "codexTestDb",
    "host": "localhost",
    "dialect": "mysql"
};
//Initialize connection
let sequelize = new Sequelize(connectionObj.database, connectionObj.username, connectionObj.password, connectionObj);

//Create Model
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


let EmployeeAddress = sequelize.define('EmployeeAddress', {
    id: {
        primaryKey: true,
        type: Sequelize.UUID
    },
    houseNo: {
        type:  Sequelize.STRING,
        allowNull: false
    },
    streetName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    district: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addressType: {
        type: Sequelize.DataTypes.ENUM(["work", "home", "others"])
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
    tableName: 'employee_address'
}
);


let Designation = sequelize.define('Designation', {
    id: {
        primaryKey: true,
        type: Sequelize.UUID
    },
    designation_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true,
    tableName: 'designations'
}
);

//Create one-to-one relationship
Employee.hasOne(EmployeeInfo);
EmployeeInfo.belongsTo(Employee);

//Create one-to-many relationship
EmployeeInfo.hasMany(EmployeeAddress);
EmployeeAddress.belongsTo(EmployeeInfo);

//Create many-to-many

Employee.belongsToMany(Designation, {through : 'employee_designation'});
Designation.belongsToMany(Employee, {through : 'employee_designation'});

//Sync the tables between the sequelize and database;


async function createTables(){
    try{
        await sequelize.sync({force: true});
        let employee = await createEmployee("MOHAN-123");
        let employee1 = await createEmployee("ANJI-987");

        //employee.employeeId
        //creating my information in the employees_info table
        let employeeInfo = await createEmployeeInfo();
        //create the one-to-one relationship between employee and employeeIno
        await employee.setEmployeeInfo(employeeInfo);
    
        console.log("employee_info>>", (await employeeInfo.getEmployee()).employeeId);
        let employeeAddress1 = await createEmployeeAddress({
            id: crypto.randomUUID(),
            houseNo: "123",
            streetName: "Madhavadhara",
            city: "Vizag",
            district: "Visakhapatnam",
            state: "Andhra Pradesh",
            addressType: "home"
        })
    
        let employeeAddress2 = await createEmployeeAddress({
            id: crypto.randomUUID(),
            houseNo: "2/4/3",
            streetName: "Ashok Nagar",
            city: "Sholingnallur",
            district: "Chennai",
            state: "TamilNadu",
            addressType: "home"
        })
        //creates one-to-many relationship between employee_infoand employee_address data.
        //or creates primary and foreign key relationship between the tables employee_info and employee_address
        await employeeInfo.addEmployeeAddresses([employeeAddress1, employeeAddress2]);
        await createDesignations();

        //create many-to-many relationship between employees and designations
        let designations = await Designation.findAll({limit: 2});
        let designation = await Designation.findAll({limit: 1});
        //employee=mohan
        //creates records in the junction table i.e employee_designation 
        await employee.addDesignations(designations);
        //employee=anji
        //creates records in the junction table i.e employee_designation 
        await employee1.addDesignation(designation);
        //returning employee=mohan
        return employee;

    } catch(error) {
        throw new Error(error);
    }
}


async function createDesignations() {
    try{
        let designation = await Designation.create({
            id: crypto.randomUUID(),
            designation_name: "Software Engineer"
        });
        designation = await Designation.create({
            id: crypto.randomUUID(),
            designation_name: "Architect"
        });
        designation = await Designation.create({
            id: crypto.randomUUID(),
            designation_name: "Mentor"
        });
        designation = await Designation.create({
            id: crypto.randomUUID(),
            designation_name: "Consultant"
        });
    }catch(error) {
        throw new Error(error);
    }
}

//fn to create employee info in the table employees_info
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

async function createEmployeeAddress(address) {
    try {
        let employeeAddress = await EmployeeAddress.create(address);
        return employeeAddress;
    } catch(error) {
        throw new Error(error);
    }
}

//create employee record in the employees table
async function createEmployee(employeeId) {
    try{
        let employee = await Employee.create({
            id: crypto.randomUUID(),
            employeeId: employeeId
        });
        return employee;
    } catch(error) {
        throw new Error(error);
    }
}

//call the functions using promise chains
createTables()
.then(async (employee) => {
    let iamEager = await Employee.findOne({
        where: {
            employeeId: "MOHAN-123"
        },
        include: EmployeeInfo
    });


    let iamLazy = await Employee.findOne({
        where: {
            employeeId: "MOHAN-123"
        }
    })

    let iam = iamLazy;
    console.log("iamEager - Want my First Name >>> ", iamEager.EmployeeInfo.firstName);
    console.log("iamLazy - Want my First Name ### ", (await iamLazy.getEmployeeInfo()).firstName);  

    //many to many relationship 
    let designation = await Designation.findOne();
    console.log("many-to-many - an employee with many designations " + iamLazy.employeeId, (await iamLazy.getDesignations()).map((designation) => designation.designation_name));
    console.log("many-to-many - a designation assigned to many emplyoees", (await designation.getEmployees()).map((employee) => employee.employeeId));
    
    //iam = Employee Type
    // await Employee.get"EmployeeInfo"() = returns "EmployeeInfo" object of iam employee

    console.log("one-to-many: ", (await (await iam.getEmployeeInfo()).getEmployeeAddresses()).map((address) => address.streetName));
    // let designation = await Designation.findAll({limit: 1});
    // console.log(designation[0].designation_name)
    // console.log((await designation[0].getEmployees()).map(((employee) => employee.employeeId)));

})
.catch((error) => {
    console.log("Error ", error);
})
.finally(() => {
    sequelize.close();
})
