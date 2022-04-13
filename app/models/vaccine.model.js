module.exports = (sequelize, Sequelize) => {
    const Vaccine = sequelize.define("Vaccine", {
      batchNum: {
          type: Sequelize.INTEGER,
          primaryKey: true
      },
      vaccineName: {
        type: Sequelize.STRING
      },
      disease: {
        type: Sequelize.STRING
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

    Vaccine.associate = function(models){
      Vaccine.belongsTo(models.Patient, {foreignKey: {
        name: 'patientID'
       }
      });
    };
    
    return Vaccine;
  };