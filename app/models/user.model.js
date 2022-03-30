module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        UserID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        Username: {
            type: Sequelize.STRING
        },
        Email: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.STRING
        },
        DOB: {
            type: Sequelize.DATE
        }
      },
      {
        timestamps: false
      }
    );
  
    return User;
  };