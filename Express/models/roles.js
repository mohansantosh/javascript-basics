module.exports = function (sequelize, Sequelize) {
    let Role = sequelize.define('Role', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        roleName: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
        {
            freezeTableName: true,
            tableName: 'roles'
        }
    );
    return Role;
}