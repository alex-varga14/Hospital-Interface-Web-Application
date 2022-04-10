module.exports = app => {
    const prescriptions = require("../controllers/prescription.controller.js");
    var router = require("express").Router();
    
    // Create a new Prescription
    router.post("/prescriptions", prescriptions.create);
  /*
    // Retrieve a single Appointment with apptId
    router.get("/appointments/:apptId", appointments.findAppointmentByPK);
    
    //Retrieve Appointments by PatientID
    router.get("/appointments/patientID/:patientID", appointments.findAppointmentbyPatientID);

    // Update a Appointment with apptID
    router.put("/appointments/:apptId", appointments.update);
  
    // Delete a Appointments with id
    router.delete("/appointments/:apptId", appointments.delete);
 */
    // Set base route for the endpoints
    app.use('/api', router);
  };