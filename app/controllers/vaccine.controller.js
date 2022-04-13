const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const vaccineModel = require("../models/vaccine.model");
const Vaccine = db.vaccine;
const Op = db.Sequelize.Op;

// Create and Save a new Vaccine
exports.create = (req, res) => {
  // Validate request
  if(!req.body.batchNum)
  {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Enter a new vaccine
  const vaccine = {
    batchNum: req.body.batchNum,
    vaccineName: req.body.vaccineName,
    disease: req.body.disease,
    patientID: req.body.patientID
  };

  // Save Vaccine in the database
  Vaccine.create(vaccine)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while inputting the Vaccine."
      });
    });
};

// Search Vaccine by Primary Key
exports.findVaccineByPK = (req, res) => {
  const batchNum = req.params.batchNum;

  Vaccine.findByPk(batchNum)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Vaccine with batchNum=" + batchNum
      });
    });
};

// Update a Vaccine by the patientID in the request
exports.update = (req, res) => {
  const patientID = req.params.patientID;

  Vaccine.update(req.body, {
    where: { patientID: patientID }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Vaccine was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Vaccine with patientID=${patientID}. Maybe Vaccine was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Vaccine with patientID=" + patientID
      });
    });
}; 

// Delete a Vaccine with the specified patientID in the request
exports.delete = (req, res) => {
  const patientID = req.params.patientID;

  Vaccine.destroy({
    where: { patientID: patientID }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Vaccine was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Vaccine with patientID=${patientID}. Maybe Vaccine was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Vaccine with patientID=" + patientID
      });
    });
};


// Get Vaccine by PatientID
exports.findVaccinebyPatientID = (req, res) => {
    const patientID = req.params.patientID;

    Vaccine.findAll({
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
            err.message || "Some error occurred while retrieving Vaccine by PatientID."
        });
    });
};