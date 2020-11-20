const db = require('../config/db.config.js');
const Schedule = db.schedule;
const Employee = db.employee;

// Post a schedule
exports.create = async(req, res) => {
    var oneEmployee = await Employee.findOne({
        where: {
            email: req.body.email
        }    
    });
    if(oneEmployee === null) {
        oneEmployee = await Employee.create({
                email: req.body.email
        });
    }
    const oneSchedule = await Schedule.create({
        name: req.body.name,
        start: req.body.start,
        end: req.body.end,
        color: req.body.color,
    });

    oneSchedule.addEmployee(oneEmployee)
};

// FETCH all schedule
exports.findAll = async(req, res) => {
     const response = await Schedule.findAll({}).map(el => el.get({ plain: true }))
    // console.log((await Ship.findAll({ include: Captain })).toJSON());
    console.log(response);
    return res.status(200).send(response);
    // return res.status(200).send(response);
};
// let response;
// try {
//     response = await orderService.completeCheckoutUsingCard(req.body.checkoutId, req.body.paymentToken, req.user);
//     return res.status(response.httpStatus).send(response);
// }
// catch(err) {
//     logger.error("Error in completeCheckoutUsingCard Controller", {meta: err});
//     return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({httpStatus: httpStatus.INTERNAL_SERVER_ERROR, status: "failed", errorDetails: err});
// }