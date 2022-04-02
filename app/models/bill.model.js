module.exports = (sequelize, Sequelize) => {
    const Bill = sequelize.define("bills", {
      billID: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      insurance: {
        type: Sequelize.STRING
      },
      billDate: {
        type: Sequelize.DATE
      },
      bank: {
        type: Sequelize.STRING
      },
      price: {
          type: Sequelize.INTEGER
      }
    });
    
    return Bill;
  };