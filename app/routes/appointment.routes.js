module.exports = app => {
    const appointments = require("../controllers/appointment.controller.js");
    var router = require("express").Router();
    
    // Create a new Appointment
    router.post("/appointments", appointments.create);
  
    // Retrieve a single Appointment with apptId
    router.get("/appointments/:apptId", appointments.findAppointmentByPK);
    
    //Retrieve Appointments by PatientID
    router.get("/appointments/patientID/:patientID", appointments.findAppointmentbyPatientID);

    // Update a Appointment with doctorID
    router.put("/appointments/:doctorID", appointments.update);
  
    // Delete a Appointments with id
    router.delete("/appointments/:id", appointments.delete);

    //Get all requested appointments
    router.get("/appointments/requested/:req", appointments.findRequestedAppointments);

    //Approve requested appointments
    router.put("/appointments/requested/:id", appointments.setAppointmentFalse);

    // Set base route for the endpoints
    app.use('/api', router);
  };