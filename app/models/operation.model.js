module.exports = (sequelize, Sequelize) => {
    const Operation = sequelize.define("operations", {
      operationNum: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      operationType: {
        type: Sequelize.SRTING
      },
      time: {
        type: Sequelize.DATE
      },
      complete: {
        type: Sequelize.BOOLEAN
      }
    });
    
    return Operation;
  };