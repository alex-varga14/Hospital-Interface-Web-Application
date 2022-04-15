module.exports = app => {
    const doctors = require("../controllers/doctor.controller.js");
    var router = require("express").Router();
    
    // Create a new doctor
    router.post("/doctors", doctors.create);
  
    // Retrieve a single doctors with userId
    router.get("/doctors/:userID", doctors.findDoctorByPK);
    /*
    //Retrieve doctor by PatientID
    router.get("/patients/patientID/:patientID", appointments.findPatientbyPatientID);
*/
    // Update a Patient with userID
    router.put("/doctors/:userId", doctors.update);
  
    // Delete a doctors with id
    router.delete("/doctors/:userId", doctors.delete);

    //get All doctors and aggregate data
    router.get("/doctors", doctors.findAllDoctors)

    // Set base route for the endpoints
    app.use('/api', router);
  };