module.exports = function(sequelize, Sequelize) {
 
    var vacationreport = sequelize.define('vacationreport', {
 
        vacationReportId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        employeeId:{
            type: Sequelize.INTEGER
        },
        firstName:{
            type: Sequelize.STRING(45)
        },
        lastName:{
            type: Sequelize.STRING(45)
        },
        phone:{
            type: Sequelize.STRING(45)
        },
        vacationStatus:{
            type: Sequelize.STRING(45)
        },
        vacationType:{
            type: Sequelize.STRING(45)
        },
        vacationStartDate:{
            type: Sequelize.DATEONLY
        },
        vacationEndDate:{
            type: Sequelize.DATEONLY
        },
        // employeeId: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     references: {         // WorkingDays hasMany Users n:n
        //       model: 'employee',
        //       key: 'id'
        //     }
        // }
 
    },   {
        indexes:[
            {
                unique:false,
                fields:["vacationReportId"]
            },
            // {
            //     unique:false,
            //     fields:["vacationTypeId"]
            // },
            // {
            //     unique:false,
            //     fields:["vacationStatusId"]
            // }
        ]
    });
 
    return vacationreport;
 
}