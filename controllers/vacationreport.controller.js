const { where } = require('sequelize');
const { vacationreport } = require('../config/db.config.js');
//const { employees, sequelize, employeetype } = require('../config/db.config.js');
const db = require('../config/db.config.js');
//let models = require('../models');
//const models = require('../models/employeetype.model');

const VacationReport = db.vacationreport;
const Op = db.Sequelize.Op;


 
// FETCH all Customers
exports.findAll = (req, res) => {
	VacationReport.findAll().then(vacationreport => {
		
		// Send all customers to Client
		res.send(vacationreport);
	});

};

