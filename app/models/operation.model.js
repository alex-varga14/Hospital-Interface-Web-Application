module.exports = (sequelize, Sequelize) => {
    const Operation = sequelize.define("Operation", {
      operationNum: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      operationType: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE
      },
      complete: {
        type: Sequelize.BOOLEAN
      }
      // ,
      // surgeonID: {
      //     type: Sequelize.INTEGER,
      //     references: {
      //         model: 'Surgeons',
      //         key: 'userID'
      //     }
      // }
    },
    {
        timestamps: false
    });

    // Operation.associate = function(models){
    //   Operation.belongsTo(models.surgeon, {foreignKey: {
    //     name: 'surgeonID'
    //    }
    //   });
    // };
    
    return Operation;
  };