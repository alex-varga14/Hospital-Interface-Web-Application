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
  console.log("trying hard");
  // Book an Prescription
  const prescription = {
    prescID: req.body.prescID,
    instructions: req.body.instructions,
    refilDate: req.body.refilDate,
    medications: req.body.medications,
    patientID: req.body.patientID
  };

  // Save Prescription in the database
  Prescription.create(prescription)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while booking the Appointmnent."
      });
    });
};
/*
// Search Appointment by Primary Key
exports.findAppointmentByPK = (req, res) => {
  const apptId = req.params.apptId;

  Appointment.findByPk(apptId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Appointment with apptId=" + apptId
      });
    });
};

// Update a Appointment by the apptID in the request
exports.update = (req, res) => {
  const apptId = req.params.apptId;

  Appointment.update(req.body, {
    where: { apptID: apptId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Appoimtment was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Appoimtment with apptID=${apptId}. Maybe Apppointment was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Appointment with apptId=" + apptId
      });
    });
}; 

// Delete a Appointment with the specified apptID in the request
exports.delete = (req, res) => {
  const apptId = req.params.apptID;

  Appointment.destroy({
    where: { apptID: apptId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Appointment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Appointment with appointmentID=${apptId}. Maybe Appointment was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Apppointment with appointmentID=" + apptId
      });
    });
};


// Get appointment by PatientID
exports.findAppointmentbyPatientID = (req, res) => {
    const patientID = req.params.patientID;

    Appointment.findAll({
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
            err.message || "Some error occurred while retrieving Appointment by PatientID."
        });
    });
}; */
