const { where } = require('sequelize');
const { boatstatusreport } = require('../config/db.config.js');
//const { employees, sequelize, employeetype } = require('../config/db.config.js');
const db = require('../config/db.config.js');
//let models = require('../models');
//const models = require('../models/employeetype.model');

const BoatStatusReport = db.boatstatusreport;
const Op = db.Sequelize.Op;


 
// FETCH all Customers
exports.findAll = (req, res) => {
	BoatStatusReport.findAll({where: { maintenanceRequired: "no"}}).then(boatstatusreport => {
		
		// Send all customers to Client
		res.send(boatstatusreport);
	});

};

