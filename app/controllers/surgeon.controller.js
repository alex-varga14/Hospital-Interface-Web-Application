const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const surgeonModel = require("../models/surgeon.model");
const Surgeon = db.surgeon;
const Op = db.Sequelize.Op;

// Create and Save a new Surgeon
exports.create = (req, res) => {
  // Validate request
  if(!req.body.username)
  {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // create Surgeon
  const surgeon = {
    username: req.body.username,
    dob: req.body.dob,
    password: req.body.password,
    surgeonType: req.body.surgeonType
  };

  // Save Surgeon in the database
  Surgeon.create(surgeon)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Surgeon."
      });
    });
};

// Search Surgeon by Primary Key
exports.findSurgeonByPK = (req, res) => {
  const userId = req.params.userID;

  Surgeon.findByPk(userId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Surgeon with userID=" + userId
      });
    });
};

// Retrieve all Surgeons from the database.
exports.findAllSurgeons = (req, res) => {
  
    Surgeon.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Surgeons."
      });
    });
}; 

// Update a Surgeon by the userId in the request
exports.update = (req, res) => {
  const userId = req.params.userID;

  Surgeon.update(req.body, {
    where: { userID: userId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Surgeon was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Surgeon with userID=${userId}. Maybe Surgeon was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Surgeon with userID=" + userId
      });
    });
}; 

// Delete a Surgeon with the specified userID in the request
exports.delete = (req, res) => {
  const userId = req.params.userID;

  Surgeon.destroy({
    where: { userID: userId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Surgeon was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Surgeon with userID=${userId}. Maybe Surgeon was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Surgeon with userID=" + userId
      });
    });
};