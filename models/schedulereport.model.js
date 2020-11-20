// const { employees, employeetype } = require("../config/db.config");
//const employeeType = require('./employeetype.model');
module.exports = function(sequelize, Sequelize) {
 
    var schedulereport = sequelize.define('schedulereport', {
 
        scheduleReportId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        employeeId:{
            type:Sequelize.INTEGER
        }, 
        firstName: {
            type: Sequelize.STRING(45),
            notEmpty: true
        },
 
        lastName: {
            type: Sequelize.STRING(45),
            notEmpty: true
        },
        scheduleDate: {
            type: Sequelize.DATEONLY
        },

        shift: {
            type: Sequelize.DATEONLY
        },
    },
    
    {
        freezeTableName: true,
        timestamps: false
    });

    // var employeeType = sequelize.define('employeeType', {
 
    //     employeeTypeId: {
    //         autoIncrement: true,
    //         primaryKey: true,
    //         type: Sequelize.INTEGER,
            
    //     },

    //     employeeType: {
    //         type: Sequelize.ENUM('Owner', 'Supervisor', 'Captain'),
    //     }},
    //     {
    //         freezeTableName: true,
    //         timestamps: false
 
 
    // });
    // employee.associate = function(){
    //     employee.hasOne(employeeType,{foreignKey:'employeeTypeId'});
        
    // };
    // employeeType.associate = function(){
    //     employeeType.hasOne(employee,{foreignKey:'employeeTypeId'});
    // };
    //employees.associate = function(){
        //models.employeetype.hasMany(employee,{foreginKey:'employeeTypeId',sourceKey:'employeeTypeId'})
    //employees.hasOne(employeetype,{foreignKey:'employeeTypeId'});
        //,{Foreignkey:{name:'employeeTypeId'}}
    //};
    return schedulereport;
 
}