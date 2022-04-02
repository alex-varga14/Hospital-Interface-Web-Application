module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
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
    }
  });
  
  return User;
};