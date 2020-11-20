var express = require('express');
const vacationreport = require('../controllers/vacationreport.controller.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies Vacation Report' });
});


// Retrieve all Customer
router.get('/all', vacationreport.findAll);


module.exports = router;