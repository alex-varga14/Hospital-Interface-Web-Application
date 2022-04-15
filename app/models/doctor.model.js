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
     },
      facilityID: {
          type: Sequelize.STRING,
          references: {
              model: 'Facilities',
              key: 'facilityName'
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

      Doctor.belongsTo(models.Facility, {foreignKey: {
        name: 'facilityID'
       }
      });

      Doctor.hasMany(models.appointment, {foreignKey: {
        name: 'doctorID',
        allowNull: true
      },
      onDelete: 'cascade'
      });

      Doctor.hasMany(models.prescription, {foreignKey: {
        name: 'doctorID',
        allowNull: true
      },
      onDelete: 'cascade'
      });
    };

    return Doctor;
  };