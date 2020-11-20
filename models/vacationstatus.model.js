module.exports = function(sequelize, Sequelize) {
 
    var vacationstatus = sequelize.define('vacationstatus', {
 
        vacationStatusId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        vacationStatus: {
            type: Sequelize.STRING(45)
        }
 
 
    });
 
    return vacationstatus;
}