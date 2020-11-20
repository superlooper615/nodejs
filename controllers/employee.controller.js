//const { employees } = require('../config/db.config.js');
const { where } = require('sequelize');
//const { employees, sequelize, employeetype } = require('../config/db.config.js');
const db = require('../config/db.config.js');
//let models = require('../models');
//const models = require('../models/employeetype.model');

const Employee = db.employees;
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

//Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	Employee.create(//req.body
	{ 
	  employeeId: req.body.employeeId,
	  firstName: req.body.firstName,
	  lastName:  req.body.lastName,
	  email:  req.body.email,
	  Phone:  req.body.Phone,
	  address: req.body.address,
	  employeeStatus:  req.body.employeeStatus,
	  employeeType:  req.body.employeeType
	}
	).then(employees => {		
		// Send created customer to client
		return res.send(employees);
		res.redirect('/employee');
	})
	// .catch(function(err) {
	// 	// print the error details
	// 	console.log(err);
	// });;
};

// exports.create = async function (req,res,next){
// 	var employees = await Employee.create({
// 		employeeId: req.body.employeeId,
// 		firstname: req.body.firstname,
// 		lastname:  req.body.lastname,
// 		email:  req.body.email,
// 		Phone:  req.body.Phone,
// 		address: req.body.address,
// 		employeeStatus:  req.body.employeeStatus,
// 		employeeType:  req.body.employeeType
// 	})
// 		res.json({employees:employees});
// }
 
// FETCH all Customers
exports.findAll = (req, res) => {
	Employee.findAll().then(employees => {
		
		// Send all customers to Client
		res.send(employees);
	});

};

// Find a Customer by Id
exports.findOne = (req, res) => {
	const employeeId = req.params.employeeId;
  
	Employee.findByPk(employeeId)
	  .then(data => {
		res.send(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error retrieving Tutorial with id=" + employeeId
		});
	  });
  };
 
// Update a Customer
exports.update = (req, res) => {
	const id = req.params.employeeId;
	Employee.update( { firstName: req.body.firstName, lastName: req.body.lastName, email:  req.body.email,
		Phone:  req.body.Phone, address: req.body.address,employeeStatus:  req.body.employeeStatus,
		employeeType:  req.body.employeeType}, 
					 { where: {employeeId: req.params.employeeId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a customer with id = " + id);
				   });
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const employeeId = req.params.employeeId;
	Employee.destroy({
	  where: { employeeId: employeeId }
	}).then(() => {
	  res.status(200).send('deleted successfully a Employee with id = ' + employeeId);
	});
};