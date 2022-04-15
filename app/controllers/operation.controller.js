const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const operationModel = require("../models/operation.model");
const Operation = db.operation;
const Op = db.Sequelize.Op;

// Create and Schedule a new Operation
exports.create = (req, res) => {
  // Validate request
  if(!req.body.operationNum)
  {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Book an Operation
  const operation = {
    operationNum: req.body.operationNum,
    operationType: req.body.operationType,
    time: req.body.time,
    complete: req.body.complete,
    surgeonID: req.body.surgeonID,
    facilityID: req.body.facilityID
  };

  // Save Operation in the database
  Operation.create(operation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while scheduling the Operation."
      });
    });
};

// Search Operation by Primary Key
exports.findOperationByPK = (req, res) => {
  const operationNum = req.params.operationNum;

  Operation.findByPk(operationNum)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Operation with operationNum=" + operationNum
      });
    });
};

// Update a Operation by the operationNum in the request
exports.update = (req, res) => {
  const operationNumb = req.params.operationNum;

  Operation.update(req.body, {
    where: { operationNum: operationNumb }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Operation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Operation with operationNum=${operationNumb}. Maybe Operation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Operation with operationNum=" + operationNumb
      });
    });
}; 

// Delete a Operation with the specified operation Number in the request
exports.delete = (req, res) => {
  const operationNumb = req.params.operationNum;

  Operation.destroy({
    where: { operationNum: operationNumb }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Operation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Operation with operationNum=${operationNumb}. Maybe Operation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Operation with operationNum=" + operationNumb
      });
    });
};

// Retrieve all Operations from the database.
exports.findAllOperations = (req, res) => {
  const operationType = req.query.operationType;
  console.log("Trying");
  //var condition = operationType ? { operationType: { [Op.like]: `%${operationType}%` } } : null;
  //Operation.findAll({ where: condition })
  Operation.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log("Failed");
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving operations."
      });
    });
};

/*
// Get operation by SurgeonID
exports.findOperationbySurgeonID = (req, res) => {
    const surgeonID = req.params.surgeonID;

    Operation.findAll({
        where: {
            surgeonID: surgeonID
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Operation by SurgeonID."
        });
    });
};
*/