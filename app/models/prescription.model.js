module.exports = (sequelize, Sequelize) => {
    const Prescription = sequelize.define("Prescriptions", {
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
     }  
    },
    {
        timestamps: false
    });

    Prescription.associate = function(models){
      Prescription.belongsTo(models.Patient, {foreignKey: {
        name: 'patientID'
       }
      });

      Prescription.belongsTo(models.Doctor, {foreignKey: {
        name: 'doctorID'
       }
      });
    };
    
    return Prescription;
  };