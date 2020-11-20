const { where } = require('sequelize');
const { vacationstatus } = require('../config/db.config.js');
//const { employees, sequelize, employeetype } = require('../config/db.config.js');
const db = require('../config/db.config.js');
//let models = require('../models');
//const models = require('../models/employeetype.model');

const VacationStatus = db.vacationstatus;
const Op = db.Sequelize.Op;


 
// FETCH all Customers
exports.findAll = (req, res) => {
	VacationStatus.findAll().then(vacationstatus => {
		
		// Send all customers to Client
		res.send(vacationstatus);
	});

};
