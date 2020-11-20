var express = require('express');
const vacationtype = require('../controllers/vacationtype.controller.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies Vacation Type' });
});


// Retrieve all Customer
router.get('/all', vacationtype.findAll);


module.exports = router;