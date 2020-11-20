const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, env);

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
// db.customer = require('../models/customer.model.js')(sequelize, Sequelize);
db.users = require('../models/user.model.js')(sequelize, Sequelize);
// db.employeetype = require('../models/employeetype.model.js')(sequelize, Sequelize);
// db.employeestatus = require('../models/employeestatus.model.js')(sequelize, Sequelize);
db.useraccount = require('../models/useraccount.model.js')(sequelize, Sequelize);
db.employee = require('../models/employee.model.js')(sequelize, Sequelize);
db.employeeschedule = require('../models/employeeschedule.model.js')(sequelize, Sequelize);
// db.shift = require('../models/shift.model.js')(sequelize, Sequelize);
db.schedule = require('../models/schedule.model.js')(sequelize, Sequelize);
// db.vacation = require('../models/vacation.model.js')(sequelize, Sequelize);
// db.vacationstatus = require('../models/vacationstatus.model.js')(sequelize, Sequelize);
// db.vacationtype = require('../models/vacationtype.model.js')(sequelize, Sequelize);

//Relationships

//many to many
db.employee.belongsToMany(db.schedule, { through: 'employeeschedule' , foreignKey: 'employeeId'});
db.schedule.belongsToMany(db.employee, { through: 'employeeschedule', foreignKey: 'scheduleId' });

// 1-1
db.employee.hasOne(db.useraccount, {foreignKey: 'employeeId'});
db.useraccountemployee = db.useraccount.belongsTo(db.employee, {foreignKey: 'employeeId'});

// 1-many
// db.employeestatus.hasMany(db.employee, {foreignKey: 'employeeStatusId'});
// // db.employeest = db.employee.belongsTo(db.employeestatus, {foreignKey: 'employeeStatus'});

// db.employeetype.hasMany(db.employee, {foreignKey: 'employeeTypeId'});
// db.employeetp = db.employee.belongsTo(db.employeetype, {foreignKey: 'employeeTypeId'});

// db.shift.hasMany(db.schedule, {foreignKey: 'shiftId'});
// db.employeesch = db.schedule.belongsTo(db.shift, {foreignKey: 'shiftId'});
db.employees = require('../models/employee.model.js')(sequelize, Sequelize);
db.employeetype = require('../models/employeetype.model.js')(sequelize, Sequelize);
db.employeestatus = require('../models/employeestatus.model.js')(sequelize, Sequelize);
db.boatrental = require('../models/boatrental.model')(sequelize, Sequelize);
db.vacation = require('../models/vacation.model')(sequelize, Sequelize);
db.vacationtype = require('../models/vacationtype.model')(sequelize, Sequelize);
db.vacationstatus = require('../models/vacationstatus.model')(sequelize, Sequelize);
db.vacationreport = require('../models/vacationreport.model')(sequelize, Sequelize);
db.schedulereport = require('../models/schedulereport.model')(sequelize, Sequelize);
db.boatstatusreport = require('../models/boatstatusreport.model')(sequelize, Sequelize);





module.exports = db;