module.exports = (sequelize, Sequelize) => {
    const Facility = sequelize.define("Facility", {
      facilityName: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      facilityType: {
        type: Sequelize.STRING
      },
      cityName: {
        type: Sequelize.STRING
      },
      countryName: {
        type: Sequelize.STRING
      }
    },
    {
        timestamps: false
    });

    Facility.associate = function(models) {
      Facility.hasMany(models.Operation, {foreignKey: {
        name: 'facilityID',
        allowNull: true
      },
      onDelete: 'cascade'
      });

      Facility.hasMany(models.Doctor, {foreignKey: {
        name: 'facilityID',
        allowNull: true
      },
      onDelete: 'cascade'
      });
    };
    
    return Facility;
  };