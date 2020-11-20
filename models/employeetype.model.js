module.exports = function(sequelize, Sequelize) {
 
    var employeeType = sequelize.define('employeeType', {
 
        employeeTypeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            
        },

        employeeType: {
            type: Sequelize.ENUM('Owner', 'Supervisor', 'Captain'),
        }},
        {
            freezeTableName: true,
            timestamps: false
 
 
    });
    // employeeType.associate = function(){
    //     employeeType.hasOne(employee)
        
    // };
    
    return employeeType;
 
}