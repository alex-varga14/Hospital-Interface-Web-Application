module.exports = (sequelize, Sequelize) => {
    const Disorder = sequelize.define("disorders", {
      disorderName: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      disorderType: {
        type: Sequelize.STRING
      }
    });
    
    return Disorder;
  };