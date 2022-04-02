module.exports = (sequelize, Sequelize) => {
    const Appointment = sequelize.define("appointments", {
      apptID: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      summary: {
        type: Sequelize.STRING
      },
      apptDate: {
        type: Sequelize.DATE
      },
      bloodPressure: {
        type: Sequelize.INTEGER
      },
      temperature: {
        type: Sequelize.INTEGER
      }
    });
    
    return Appointment;
  };