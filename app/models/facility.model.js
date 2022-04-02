module.exports = (sequelize, Sequelize) => {
    const Facility = sequelize.define("facilities", {
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
    });
    
    return Facility;
  };