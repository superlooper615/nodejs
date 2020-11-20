module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	  firstName: {
		type: Sequelize.STRING(45)
	  },
	  lastName: {
		type: Sequelize.STRING(45)
	  },
	  email: {
		  type: Sequelize.STRING(45)
	  },
	  phone: {
		type: Sequelize.STRING(10)
	},
	});
	
	return Customer;
}