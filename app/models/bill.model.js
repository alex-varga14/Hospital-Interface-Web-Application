module.exports = (sequelize, Sequelize) => {
    const Bill = sequelize.define("Bill", {
      billID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      insurance: {
        type: Sequelize.STRING
      },
      billDate: {
        type: Sequelize.DATE
      },
      bank: {
        type: Sequelize.STRING
      },
      price: {
          type: Sequelize.INTEGER
      },
      patientID : {
        type: Sequelize.INTEGER,
        references: {
            model: 'Patients',
            key: 'userID'
        }
    }
    },
    {
        timestamps: false
    });

    Bill.associate = function(models){
      Bill.belongsTo(models.Patient, {foreignKey: {
        name: 'patientID'
       }
      });
    };
    
    return Bill;
  };