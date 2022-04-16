const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const appointmentModel = require("../models/appointment.model");
const Appointment = db.appointment;
const Op = db.Sequelize.Op;

// Create and Save a new Appointment
exports.create = (req, res) => {
  // Validate request
  if(!req.body.apptDate)
  {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Book an Appointment
  const appointment = {
    summary: req.body.summary,
    apptDate: req.body.apptDate,
    bloodPressure: req.body.bloodPressure,
    temperature: req.body.temperature,
    patientID: req.body.patientID,
    requested: req.body.requested,
    doctorID: req.body.doctorID
  };

  // Save Appointment in the database
  Appointment.create(appointment)
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

// Update a Appointment by the docId in the request
exports.update = (req, res) => {
  const docId = req.params.doctorID;

  Appointment.update(req.body, {
    where: { doctorID: docId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Appoimtment was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Appoimtment with doctorID=${docId}. Maybe Apppointment was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Appointment with doctorID=" + docId
      });
    });
}; 

// Delete a Appointment with the specified patientID in the request
exports.deleteByPatientID = (req, res) => {
  const patientId = req.params.id;

  Appointment.destroy({
    where: { patientID: patientId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Appointment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Appointment with patientID=${patientId}. Maybe Appointment was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Apppointment with patientID=" + patientId
      });
    });
};

// Delete a Appointment with the specified apptID in the request
exports.deleteByApptID = (req, res) => {
  const apptId = req.params.id;

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
          message: `Cannot delete Appointment with apptID=${apptId}. Maybe Appointment was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Apppointment with apptID=" + apptId
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
};

// Get Appointsments by requested
exports.findRequestedAppointments = (req, res) => {
  const request = req.params.req;

  Appointment.findAll({
    where: {
      requested: request
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving requested appointments."
    });
  });
};

// Approve requested appointment 
exports.setAppointmentFalse = (req, res) => {
  const apptID = req.params.id;
  console.log("In false");
  sequelize.query(
    'UPDATE Appointments SET Requested = False WHERE apptID = ' + apptID + ';', {
      type: sequelize.QueryTypes.UPDATE
    }
  )
  .then(num => {
    res.send({
      message: "Appointment was updated successfully."
    })
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Appointment with apptID = " + apptID
    });
  });

};

/*
// Retrieve all Courses from the database.
exports.findAllCourses = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Course.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
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

// Get all Courses, as well as average Ratings and # of Reviews
exports.getCourseAndAggregates = (req, res) => {
  
  sequelize.query(
    'SELECT Courses.ID, Courses.Title, Courses.Description, Courses.Faculty, Courses.CourseCode, Courses.CourseNo, AVG(Ratings.Enjoyment) as Enjoyment, AVG(Ratings.Difficulty) as Difficulty, AVG(Ratings.Workload) as Workload, COUNT(DISTINCT(Reviews.ID)) as NumReviews FROM Courses LEFT OUTER JOIN Ratings ON Ratings.CourseID = Courses.ID LEFT OUTER JOIN Reviews ON Reviews.CourseID = Courses.ID WHERE Suggested = false GROUP BY Courses.ID;', {
      type: sequelize.QueryTypes.SELECT
    }
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving courses with aggregates."
    });
  });
};
 */