module.exports = function(sequelize, Sequelize) {
 
    var vacation = sequelize.define('vacation', {
 
        vacationId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        employeeId:{
            type: Sequelize.INTEGER
        },
        vacationTypeId:{
            type: Sequelize.INTEGER
        },
        vacationStatusId:{
            type: Sequelize.INTEGER
        },
        vacationStartDate:{
            type: Sequelize.DATEONLY
        },
        vacationEndDate:{
            type: Sequelize.DATEONLY
        },
        employeeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         // WorkingDays hasMany Users n:n
              model: 'employee',
              key: 'id'
            }
        }
 
    },   {
        indexes:[
            {
                unique:false,
                fields:["employeeId"]
            },
            {
                unique:false,
                fields:["vacationTypeId"]
            },
            {
                unique:false,
                fields:["vacationStatusId"]
            }
        ]
    });
 
    return vacation;
 
}