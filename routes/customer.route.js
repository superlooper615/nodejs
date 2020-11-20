var express = require('express');
const customer = require('../controllers/customer.controller.js');
// import db from '../config/db.config.js';
// const customer = db.customer;
// var enterdata = {
//   "firstName": "sample1",
//   "lastName": "name"
// };

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies Customers' });
});

// Create a new Customer
router.post('/one', customer.create)

// Retrieve all Customer
router.get('/all', customer.findAll);

// Retrieve a single Customer by Id
router.get('/one/:customerId', customer.findById);

// Update a Customer with Id
router.put('/one/:customerId', customer.update);

// Delete a Customer with Id
router.delete('/one/:customerId', customer.delete);

module.exports = router;