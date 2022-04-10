module.exports = app => {
    const appointments = require("../controllers/appointment.controller.js");
    var router = require("express").Router();
    
    // Create a new Appointment
    router.post("/appointments", appointments.create);
  
    // Retrieve a single Appointment with apptId
    router.get("/appointments/:apptId", appointments.findAppointmentByPK);
    
    //Retrieve Appointments by PatientID
    router.get("/appointments/patientID/:patientID", appointments.findAppointmentbyPatientID);

    // Update a Appointment with apptID
    router.put("/appointments/:apptId", appointments.update);
  
    // Delete a Appointments with id
    router.delete("/appointments/:apptId", appointments.delete);

    // Set base route for the endpoints
    app.use('/api', router);
  };