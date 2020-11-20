const { where } = require('sequelize');
const { vacation, vacationstatus } = require('../config/db.config.js');
//const { employees, sequelize, employeetype } = require('../config/db.config.js');
const db = require('../config/db.config.js');
//let models = require('../models');
//const models = require('../models/employeetype.model');

const VacationType = db.vacationtype;
const Op = db.Sequelize.Op;


 
// FETCH all Customers
exports.findAll = (req, res) => {
	VacationType.findAll().then(vacationtype => {
		
		// Send all customers to Client
		res.send(vacationtype);
	});

};

