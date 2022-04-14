module.exports = (sequelize, Sequelize) => {
    const Surgeon = sequelize.define("Surgeon", {
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
      surgeonType: {
        type: Sequelize.STRING,
        allowNull: true
      }
    },
    {
        timestamps: false
    });

    Surgeon.associate = function(models) {
      Surgeon.hasMany(models.Operation, {foreignKey: {
        name: 'surgeonID',
        allowNull: true
      },
      onDelete: 'cascade'
      });
    };
  
    return Surgeon;
  };