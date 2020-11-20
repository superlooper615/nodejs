module.exports = function(sequelize, Sequelize) {
 
    var boatstatusreport = sequelize.define('boatstatusreport', {
 
        boatStatusReportId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name:{
            type: Sequelize.STRING(45)
        },
        boatDescription:{
            type: Sequelize.STRING(45)
        },
        maintenanceRequired:{
            type: Sequelize.STRING(45)
        },
        description:{
            type: Sequelize.STRING(45)
        },
        captainFirstName:{
            type: Sequelize.STRING(45)
        },
        captainLastName:{
            type: Sequelize.STRING(45)
        },
        scheduleDate: {
            type: Sequelize.DATEONLY
        },

        shift: {
            type: Sequelize.DATEONLY
        },


 
    },   {
        indexes:[
            {
                unique:false,
                fields:["boatStatusReportId"]
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
 
    return boatstatusreport;
 
}