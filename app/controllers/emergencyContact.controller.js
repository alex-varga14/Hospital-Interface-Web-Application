const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const emergencyContactModel = require("../models/emergencyContact.model");
const EmergencyContact = db.emergencycontact;
const Op = db.Sequelize.Op;

// create a new emergency contact
exports.create = (req, res) => {
  // Validate request
  if(!req.body.name)
  {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // new econtact
  const emergencyC = {
    name: req.body.name,
    relationship: req.body.relationship,
    phoneNumber: req.body.phoneNumber,
    patientID: req.body.patientID
  };

  // Save EmergencyContact in the database
  EmergencyContact.create(emergencyC)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Emergency Contact."
      });
    });
};

// Delete a EmergencyContact with the specified patientID in the request
exports.delete = (req, res) => {
  const patientID = req.params.patientID;

  EmergencyContact.destroy({
    where: { patientID: patientID }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "EmergencyContact was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete EmergencyContact with patientID=${patientID}. Maybe EmergencyContact was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete EmergencyContact with patientID=" + patientID
      });
    });
};

// Get EmergencyContact by PatientID
exports.findEmergencyContactbyPatientID = (req, res) => {
    const patientID = req.params.id;

    EmergencyContact.findAll({
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
            err.message || "Some error occurred while retrieving EmergencyContact by PatientID."
        });
    });
}; 
