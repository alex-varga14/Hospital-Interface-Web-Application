module.exports = app => {
    const bills = require("../controllers/bill.controller.js");
    var router = require("express").Router();

    // Create a new Bill
    router.post("/bills", bills.create);
    /*
    // Retrieve a single Appointment with apptId
    router.get("/bills/:apptId", appointments.findAppointmentByPK);
    
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