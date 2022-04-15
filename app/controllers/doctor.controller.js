const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const doctorModel = require("../models/doctor.model");
const Doctor = db.doctor;
const Op = db.Sequelize.Op;

// Create and Save a new Doctor
exports.create = (req, res) => {
  // Validate request
  if(!req.body.username)
  {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // create doctor
  const doctor = {
    username: req.body.username,
    dob: req.body.dob,
    password: req.body.password,
    specialization: req.body.specialization,
    patientID: req.body.patientID,
    facilityID: req.body.facilityID
  };

  // Save Doctor in the database
  Doctor.create(doctor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Doctor."
      });
    });
};

// Search Doctor by Primary Key
exports.findDoctorByPK = (req, res) => {
  const userId = req.params.userID;

  Doctor.findByPk(userId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Doctor with userID=" + userId
      });
    });
};

// Retrieve all Doctors from the database.
exports.findAllDoctors = (req, res) => {
  
    Doctor.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Doctors."
      });
    });
}; 

// Update a Appointment by the userId in the request
exports.update = (req, res) => {
  const userId = req.params.userID;

  Doctor.update(req.body, {
    where: { userID: userId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Doctor was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Doctor with userID=${userId}. Maybe Doctor was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Doctor with userID=" + userId
      });
    });
}; 

// Delete a Doctor with the specified userID in the request
exports.delete = (req, res) => {
  const userId = req.params.userID;

  Doctor.destroy({
    where: { userID: userId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Doctor was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Doctor with userID=${userId}. Maybe Doctor was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Doctor with userID=" + userId
      });
    });
};
/*

// Get all Ratings of a specific course
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
};
*/

/*
// Delete all Courses from the database.
exports.deleteAll = (req, res) => {
  Course.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `All Courses deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Courses."
      });
    });
};

// Get Course by Faculty
exports.findCoursebyFaculty = (req, res) => {
  const faculty = req.params.Faculty;

  Course.findAll({
    where: {
      Faculty: faculty
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving courses by faculty."
    });
  });
};

// Get Course by Suggested
exports.findSuggestedCourses = (req, res) => {
  const sug = req.params.sug;

  Course.findAll({
    where: {
      suggested: sug
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving suggested courses."
    });
  });
};

// Get Course by Title
exports.findCoursebyTitle = (req, res) => {
  const title = req.params.title;

  Course.findAll({
    where: {
      Title: title
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving courses by title."
    });
  });
};

// Get Course by CourseCode
exports.findCoursebyCourseCode = (req, res) => {
  const courseCode = req.params.courseCode;

  Course.findAll({
    where: {
      CourseCode: courseCode
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving courses by course code."
    });
  });
};

// Get Course by CourseCode and CourseNo
exports.findCoursebyCodeandNo = (req, res) => {
  const courseCode = req.params.courseCode;
  const courseNo = req.params.courseNo;

  Course.findAll({
    where: {
      CourseCode: courseCode,
      CourseNo: courseNo
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving courses by course code and course number."
    });
  });
};
// Set Suggested to False
exports.setSuggestedFalse = (req, res) => {
  const courseID = req.params.id;

  sequelize.query(
    'UPDATE Courses SET Suggested = False WHERE ID = ' + courseID + ';', {
      type: sequelize.QueryTypes.UPDATE
    }
  )
  .then(num => {
    res.send({
      message: "Course was updated successfully."
    })
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Course with id = " + id
    });
  });

}; */