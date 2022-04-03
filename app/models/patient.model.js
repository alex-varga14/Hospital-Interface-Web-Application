const db = require("../models");

module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("Patient", {
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
      weight: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      bloodType: {
        type: Sequelize.STRING,
        allowNull: true
      }
    },
    {
        timestamps: false
    }
    );
  
    Patient.associate = function(models) {
      Patient.hasOne(models.EmergencyContact, {foreignKey: {
        name: 'PatientID',
        allowNull: false
      },
      onDelete: 'cascade'
      });
  
      Patient.hasMany(models.disorder, {foreignKey: {
        name: 'patientID',
        allowNull: true
      },
      onDelete: 'cascade'
      });
  
      Patient.hasMany(models.vaccine, {foreignKey: {
        name: 'patientID',
        allowNull: true
      },
      onDelete: 'cascade'
      });
  
      Patient.hasMany(models.bill, {foreignKey: {
        name: 'patientID',
        allowNull: true
      },
      onDelete: 'cascade'
      });
  
      Patient.hasMany(models.appointment, {foreignKey: {
        name: 'patientID',
        allowNull: true
      },
      onDelete: 'cascade'
      });
  
      Patient.hasMany(models.prescription, {foreignKey: {
        name: 'patientID',
        allowNull: true
      },
      onDelete: 'cascade'
      });

      Patient.hasOne(models.doctor, {foreignKey: {
        name: 'patientID',
        allowNull: false
      },
      onDelete: 'cascade'
      });
  
    };
    return Patient;
  };