const boatrental = require("../config/db.config");
//const employeeType = require('./employeetype.model');
module.exports = function(sequelize, Sequelize) {
 
    var boatrental = sequelize.define('boatstatusreport', {
 
        boatStatusReportId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        
        name:{
            type: Sequelize.STRING,
            
        },

        boatDescription: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        maintenanceRequired: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        
        description:{
            type:Sequelize.STRING
        },

        captainFirstName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        captainLastName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        scheduleDate: {
            type: Sequelize.DATEONLY,
            notEmpty: true
        },

        shift:{
            type: Sequelize.TIME
        },

        
        
        
    },
    
    {
        freezeTableName: true,
        timestamps: false
    });

    
    return boatrental;
 
}