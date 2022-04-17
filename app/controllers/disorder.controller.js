const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const disorderModel = require("../models/disorder.model");
const Disorder = db.disorder;
const Op = db.Sequelize.Op;

// create a new disorder
exports.create = (req, res) => {
  // Validate request
  if(!req.body.disorderName)
  {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // new disorder
  const disorder = {
    disorderName: req.body.disorderName,
    disorderType: req.body.disorderType,
    patientID: req.body.patientID
  };

  // Save Disorder in the database
  Disorder.create(disorder)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Disorder."
      });
    });
};

// Search Disorder by Primary Key
exports.findDisorderByPK = (req, res) => {
  const disorderName = req.params.disorderName;

  Disorder.findByPk(disorderName)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Disorder with disorderName=" + disorderName
      });
    });
};

// Update a Disorder by the patientID in the request
exports.update = (req, res) => {
  const pId = req.params.patientID;

  Disorder.update(req.body, {
    where: { patientID: pId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Disorder was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Disorder with patientID=${pId}. Maybe Disorder was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Disorder with patientID=" + pId
      });
    });
}; 

// Delete a Disorder with the specified disorderName in the request
exports.delete = (req, res) => {
  const disorderName = req.params.disorderName;

  Disorder.destroy({
    where: { disorderName: disorderName }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Disorder was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Disorder with disorderName=${disorderName}. Maybe Disorder was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Disorder with disorderName=" + disorderName
      });
    });
};

// Get Disorder by PatientID
exports.findDisorderbyPatientID = (req, res) => {
    const patientID = req.params.patientID;
    
    Disorder.findAll({
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
            err.message || "Some error occurred while retrieving Disorder by PatientID."
        });
    });
}; 

// Retrieve all Disorders from the database.
exports.findAllDisorders = (req, res) => {
    
  Disorder.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Disorders."
      });
    });
}; 
