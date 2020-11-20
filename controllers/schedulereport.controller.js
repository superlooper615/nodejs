const { where } = require('sequelize');
const { schedulereport } = require('../config/db.config.js');
//const { employees, sequelize, employeetype } = require('../config/db.config.js');
const db = require('../config/db.config.js');
//let models = require('../models');
//const models = require('../models/employeetype.model');

const ScheduleReport = db.schedulereport;
const Op = db.Sequelize.Op;


 
// FETCH all Customers
exports.findAll = (req, res) => {
	ScheduleReport.findAll().then(schedulereport => {
		
		// Send all customers to Client
		res.send(schedulereport);
	});

};

