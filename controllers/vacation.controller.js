const { where } = require('sequelize');
const { vacation } = require('../config/db.config.js');
//const { employees, sequelize, employeetype } = require('../config/db.config.js');
const db = require('../config/db.config.js');
//let models = require('../models');
//const models = require('../models/employeetype.model');

const Vacation = db.vacation;
const Op = db.Sequelize.Op;


 
// FETCH all Customers
exports.findAll = (req, res) => {
	Vacation.findAll().then(vacation => {
		
		// Send all customers to Client
		res.send(vacation);
	});

};

