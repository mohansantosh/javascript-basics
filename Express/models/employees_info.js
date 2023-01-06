
module.exports =  function (sequelize, Sequelize) {
    let EmployeeInfo = sequelize.define('EmployeeInfo', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
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

    EmployeeInfo.associate = function(models) {
        EmployeeInfo.belongsTo(models["Employee"]);
    }

    return EmployeeInfo;
}
