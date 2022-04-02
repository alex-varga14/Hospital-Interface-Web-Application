module.exports = (sequelize, Sequelize) => {
    const Vaccine = sequelize.define("vaccines", {
      batchNum: {
          type: Sequelize.INTEGER,
          primaryKey: true
      },
        vaccineName: {
        type: Sequelize.STRING
      },
      disease: {
        type: Sequelize.STRING
      }
    });
    
    return Vaccine;
  };