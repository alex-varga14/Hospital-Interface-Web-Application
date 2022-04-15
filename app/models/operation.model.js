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
      },
      surgeonID: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Surgeons',
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

    Operation.associate = function(models){
      Operation.belongsTo(models.Surgeon, {foreignKey: {
        name: 'surgeonID'
       }
      });

      Operation.belongsTo(models.Facility, {foreignKey: {
        name: 'facilityID'
       }
      });

    };
    
    return Operation;
  };