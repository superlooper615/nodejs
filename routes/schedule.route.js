var express = require('express');
const schedule = require('../controllers/schedule.controller.js');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies schedule' });
});

// Create a new Customer
router.post('/one', schedule.create)

// Retrieve all Customer
router.get('/all', schedule.findAll);

module.exports = router;