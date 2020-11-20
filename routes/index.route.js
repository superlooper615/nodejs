//express = require('express');
import express from 'express';
const db = require('../config/db.config');
var employee = db.employees;

var modelsEmployee = require('../controllers/employee.controller');
var modelsBoat = require('../controllers/boatrental.controller');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: 'Diversitechnologies'});
});
router.get("/employee", modelsEmployee.findAll);
router.post("/employees", modelsEmployee.create);
router.delete("/employee/:employeeId", modelsEmployee.delete);
router.put("/employee/:employeeId", modelsEmployee.update);
router.get("/employee/:employeeId", modelsEmployee.findOne);
//router.put("/employee/:employeeId", modelsEmployee.update);
// router.put("/employee/:employeeId", async function (req,res,next){
//   var employeemo=await employee.findByPk(req.params.employeeId);
// });


router.get("/boat", modelsBoat.findAll);
router.put("/boat/:boatStatusReportId", modelsBoat.update);

router.get("/boat/:boatStatusReportId", modelsBoat.findOne);


module.exports = router;