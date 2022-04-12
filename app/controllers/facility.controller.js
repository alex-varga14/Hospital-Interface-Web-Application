const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const facilityModel = require("../models/facility.model");
const Facility = db.facility;
const Op = db.Sequelize.Op;

// Create a new Facility
exports.create = (req, res) => {
  // Validate request
  if(!req.body.facilityType)
  {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // New Facility
  const facility = {
    facilityName: req.body.facilityName,
    facilityType: req.body.facilityType,
    cityName: req.body.cityName,
    countryName: req.body.countryName
  };

  // Save Facility in the database
  Facility.create(facility)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Facility."
      });
    });
};

// Search Facility by Primary Key
exports.findFacilityByPK = (req, res) => {
  const facilityName = req.params.facilityName;

  Facility.findByPk(facilityName)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Facility with facilityName=" + facilityName
      });
    });
};

// Update a Facility by the facilityName
exports.update = (req, res) => {
  const facilityN = req.params.facilityName;

  Facility.update(req.body, {
    where: { facilityName: facilityN }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Facility was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Facility with facilityName=${facilityN}. Maybe Facility was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Facility with facilityName=" + facilityN
      });
    });
}; 

// Delete a Facility with the specified name
exports.delete = (req, res) => {
  const facilityN = req.params.facilityName;

  Facility.destroy({
    where: { facilityName: facilityN }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Facility was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Facility with facilityName=${facilityN}. Maybe Facility was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Facility with facilityName=" + facilityN
      });
    });
};