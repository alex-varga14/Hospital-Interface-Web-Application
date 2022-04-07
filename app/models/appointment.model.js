module.exports = (sequelize, Sequelize) => {
    const Appointment = sequelize.define("Appointment", {
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
      },
      patientID : {
        type: Sequelize.INTEGER,
        references: {
            model: 'Patients',
            key: 'userID'
        }
    }
    },
    {
        timestamps: false
    });

    Appointment.associate = function(models){
      Appointment.belongsTo(models.Patient, {foreignKey: {
        name: 'patientID'
       }
      });
    };
    
    return Appointment;
  };