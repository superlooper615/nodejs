var express = require('express');
const boatstatusreport = require('../controllers/boatstatusreport.controller.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies boatstatus Report' });
});


// Retrieve all Customer
router.get('/all', boatstatusreport.findAll);


module.exports = router;