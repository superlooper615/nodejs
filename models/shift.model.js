module.exports = function(sequelize, Sequelize) {
 
    var shift = sequelize.define('shift', {
 
        shiftId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        shift: {
            type: Sequelize.STRING(45),
        }
     });
 
    return shift;
}