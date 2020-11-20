var express = require('express');
const schedulereport = require('../controllers/schedulereport.controller.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies schedule Report' });
});


// Retrieve all Customer
router.get('/all', schedulereport.findAll);


module.exports = router;