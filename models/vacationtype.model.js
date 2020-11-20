module.exports = function(sequelize, Sequelize) {
 
    var vacationtype= sequelize.define('vacationtype', {
 
        vacationTypeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        vacationType: {
            type: Sequelize.STRING(45)
        }
 
 
    });
 
    return vacationtype;
} 