module.exports = (sequelize, Sequelize) => {
    const Prescription = sequelize.define("prescriptions", {
      prescID: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      instructions: {
        type: Sequelize.STRING
      },
      refilDate: {
        type: Sequelize.DATE
      },
      medications: {
        type: Sequelize.STRING
      }
    });
    
    return Prescription;
  };