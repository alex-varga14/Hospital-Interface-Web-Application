module.exports = (sequelize, Sequelize) => {
    const Doctor = sequelize.define("Doctor", {
      userID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      password: {
        type: Sequelize.STRING
      },
      specialization: {
        type: Sequelize.STRING,
        allowNull: true
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

    Doctor.associate = function(models){
      Doctor.belongsTo(models.Patient, {foreignKey: {
        name: 'patientID'
       }
      });
    };

    return Doctor;
  };