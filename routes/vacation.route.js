var express = require('express');
const vacation = require('../controllers/vacation.controller.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies Vacation' });
});


// Retrieve all Customer
router.get('/all', vacation.findAll);


module.exports = router;