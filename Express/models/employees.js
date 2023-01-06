
let Employee = function (sequelize, Sequelize) {
    return sequelize.define('Employee', {
        id: {
            primaryKey: true, 
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
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
}
   
module.exports = Employee;