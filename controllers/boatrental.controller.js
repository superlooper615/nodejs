
const { where } = require('sequelize');

const db = require('../config/db.config.js');

const boatrental = db.boatrental;
//const Employeetype = db.employeetype;
const Op = db.Sequelize.Op;

//Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	boatrental.create({ 
		boatStatusReportId: req.body.boatStatusReportId,
		firstName: req.body.firstName,
		lastName:  req.body.lastName,
		scheduleDate:  req.body.scheduleDate,
		shift:  req.body.shift,
		boatStatus: req.body.boatStatus,
		boatId:  req.body.boatId,
		name:  req.body.name,
		description:  req.body.description,

	}).then(boatrentals => {		
		// Send created customer to client
		return res.json(boatrentals);
		res.redirect('/boat');
	});
};

// exports.create = (req, res) => {	
// 	// Save to MySQL database
// 	boatrental.create(req.body
// 	// { 
// 	//   employeeId: req.body.employeeId,
// 	//   firstName: req.body.firstName,
// 	//   lastName:  req.body.lastName,
// 	//   email:  req.body.email,
// 	//   Phone:  req.body.Phone,
// 	//   address: req.body.address,
// 	//   employeeStatus:  req.body.employeeStatus,
// 	//   employeeType:  req.body.employeeType
// 	// }
// 	).then(boatrental => {		
// 		// Send created customer to client
// 		res.json(boatrental);
// 		res.redirect('/boat');
// 	})
// 	.catch(function(err) {
// 		// print the error details
// 		console.log(err);
// 	});;
// };

// FETCH all Customers
exports.findAll = (req, res) => {
	boatrental.findAll().then(boatrental => {
		
		// Send all customers to Client
		res.send(boatrental);
	});

};

// Find a Customer by Id
// exports.findOne = async function (req,res,next){
// 	var employees = await Employee.findByPk({
// 		where:{id:req.params.id}
// 	)};
// };
exports.findOne = (req, res) => {
	const boatStatusReportId = req.params.boatStatusReportId;
  
	boatrental.findByPk(boatStatusReportId)
	  .then(data => {
		res.json(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error retrieving Tutorial with id=" + boatStatusReportId
		});
	  });
  };
 
// Update a Customer
exports.update = (req, res) => {
	const id = req.params.boatStatusReportId;
	boatrental.update( {name: req.body.name, boatDescription: req.body.boatDescription, 
		maintenanceRequired: req.body.maintenanceRequired, description: req.body.description
		, captainFirstName: req.body.captainFirstName, captainLastName: req.body.captainLastName
		, scheduleDate: req.body.scheduleDate, shift: req.body.shift }, 
					 { where: {boatStatusReportId: req.params.boatStatusReportId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a customer with id = " + id);
				   });
};
 
// // Delete a Customer by Id
// exports.delete = (req, res) => {
// 	const id = req.params.customerId;
// 	Customer.destroy({
// 	  where: { id: id }
// 	}).then(() => {
// 	  res.status(200).send('deleted successfully a customer with id = ' + id);
// 	});
// };