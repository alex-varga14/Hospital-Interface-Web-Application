module.exports = (sequelize, Sequelize) => {
    const Disorder = sequelize.define("Disorder", {
      disorderName: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      disorderType: {
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

    Disorder.associate = function(models){
      Disorder.belongsTo(models.Patient, {foreignKey: {
        name: 'patientID'
       }
      });
    };
    
    return Disorder;
  };