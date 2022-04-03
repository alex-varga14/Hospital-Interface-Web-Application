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
    
    return Facility;
  };