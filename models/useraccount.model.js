module.exports = function(sequelize, Sequelize) {
 
    var useraccount= sequelize.define('useraccount', {
 
        userAccountId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        // employeeId: {
        //     type: Sequelize.INTEGER
        // },
        // employeeId: {
        //     type: Sequelize.INTEGER,
        //     // allowNull: false,
        //     references: {         // WorkingDays hasMany Users n:n
        //       model: 'employee',
        //       key: 'employeeId'
        //     }
        // },
        username: {
            type: Sequelize.STRING
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }
    );
 
    return useraccount;
 
}