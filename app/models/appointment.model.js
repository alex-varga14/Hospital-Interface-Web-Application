module.exports = (sequelize, Sequelize) => {
    const Appointment = sequelize.define("Appointment", {
      apptID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
      },
      doctorID : {
        type: Sequelize.INTEGER,
        references: {
            model: 'Doctors',
            key: 'userID'
        }
      },
      requested: {
        type: Sequelize.BOOLEAN
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

      Appointment.belongsTo(models.Doctor, {foreignKey: {
        name: 'doctorID'
       }
      });
    };
    
    return Appointment;
  };