const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const billModel = require("../models/bill.model");
const Bill = db.bill;
const Op = db.Sequelize.Op;

// Invoice a new Bill
exports.create = (req, res) => {
  // Validate request
  if(!req.body.patientID)
  {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Invoice a bill
  const bill = {
    insurance: req.body.insurance,
    billDate: req.body.billDate,
    bank: req.body.bank,
    price: req.body.price,
    patientID: req.body.patientID
  };

  // Save Bill in the database
  Bill.create(bill)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Bill."
      });
    });
};

// Search Bill by Primary Key
exports.findBillByPK = (req, res) => {
  const billID = req.params.billID;

  Bill.findByPk(billID)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Bill with billID=" + billID
      });
    });
};

// Update a Bill by the patientID in the request
exports.update = (req, res) => {
  const patientId = req.params.patientID;

  Bill.update(req.body, {
    where: { patientID: patientId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bill was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Bill with patientID=${patientId}. Maybe Bill was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Bill with patientID=" + patientId
      });
    });
}; 

// Delete a Bill with the specified billID in the request
exports.delete = (req, res) => {
  const billID = req.params.billID;

  Bill.destroy({
    where: { billID: billID }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bill was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Bill with billID=${billID}. Maybe Bill was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bill with billID=" + billID
      });
    });
};

// Get Bill by PatientID
exports.findBillbyPatientID = (req, res) => {
    const patientID = req.params.id;

    Bill.findAll({
        where: {
            patientID: patientID
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Bill by PatientID."
        });
    });
}; 
