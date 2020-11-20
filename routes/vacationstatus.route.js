var express = require('express');
const vacationstatus = require('../controllers/vacationstatus.controller.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies Vacation Status' });
});


// Retrieve all Customer
router.get('/all', vacationstatus.findAll);


module.exports = router;