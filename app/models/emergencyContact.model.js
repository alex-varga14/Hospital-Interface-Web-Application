module.exports = (sequelize, Sequelize) => {
    const EmergencyContact = sequelize.define("EmergencyContact", {
      name: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      relationship: {
        type: Sequelize.STRING
      },
      phoneNumber: {
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

    EmergencyContact.associate = function(models){
      EmergencyContact.belongsTo(models.Patient, {foreignKey: {
        name: 'patientID'
       }
      });
    };

    return EmergencyContact;
  };