module.exports = (sequelize, Sequelize) => {
    const Operation = sequelize.define("Operation", {
      operationNum: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      operationType: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE
      },
      complete: {
        type: Sequelize.BOOLEAN
      }
    },
    {
        timestamps: false
    });
    
    return Operation;
  };