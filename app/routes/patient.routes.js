module.exports = app => {
    const patients = require("../controllers/patient.controller.js");
    var router = require("express").Router();
    
    // Create a new Patient
    router.post("/patients", patients.create);
  
    // Retrieve a single Patient with userId
    router.get("/patients/:userID", patients.findPatientByPK);
    /*
    //Retrieve Patient by PatientID
    router.get("/patients/patientID/:patientID", appointments.findPatientbyPatientID);
*/
    // Update a Patient with userID
    router.put("/patients/:userID", patients.update);
  
    // Delete a Patient with id
    router.delete("/patients/:userID", patients.delete);

    // //get All patient and aggregate data
    // router.get("/patients", patients.getAllPatients)
    
    //get All patient and aggregate data
    //router.get("/patients", patients.getAllPatients)
    router.get("/patients", patients.findAllPatients)

    // Set base route for the endpoints
    app.use('/api', router);
  };