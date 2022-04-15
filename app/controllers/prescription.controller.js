const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const prescriptionModel = require("../models/prescription.model");
const Prescription = db.prescription;
const Op = db.Sequelize.Op;

// Create and Save a new Prescription
exports.create = (req, res) => {
  // Validate request
  if(!req.body.prescID)
  {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Book an Prescription
  const prescription = {
    prescID: req.body.prescID,
    instructions: req.body.instructions,
    refilDate: req.body.refilDate,
    medications: req.body.medications,
    patientID: req.body.patientID,
    doctorID: req.body.doctorID
  };

  // Save Prescription in the database
  Prescription.create(prescription)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Prescription."
      });
    });
};

// Search Prescription by Primary Key
exports.findPrescriptionByPK = (req, res) => {
  const prescId = req.params.prescID;

  Prescription.findByPk(prescId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Prescription with prescID=" + prescId
      });
    });
};

// Update a Prescription by the patientID in the request
exports.update = (req, res) => {
  const patientId = req.params.patientID;

  Prescription.update(req.body, {
    where: { patientID: patientId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Prescription was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Prescription with patientID=${patientId}. Maybe Prescription was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Prescription with patientID=" + patientId
      });
    });
}; 

// Delete a Prescription with the specified prescID in the request
exports.delete = (req, res) => {
  const prescId = req.params.prescID;

  Prescription.destroy({
    where: { prescID: prescId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Prescription was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Prescription with prescID=${prescId}. Maybe Prescription was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Prescription with prescID=" + prescId
      });
    });
};


// Get Prescription by PatientID
exports.findPrescriptionbyPatientID = (req, res) => {
    const patientID = req.params.patientID;

    Prescription.findAll({
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
            err.message || "Some error occurred while retrieving Prescription by PatientID."
        });
    });
}; 

// Retrieve all Prescriptions from the database.
exports.findAllPrescriptions = (req, res) => {
    
  Prescription.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Prescriptions."
      });
    });
}; 
