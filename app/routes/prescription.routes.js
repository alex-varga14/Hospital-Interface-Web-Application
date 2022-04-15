module.exports = app => {
    const prescriptions = require("../controllers/prescription.controller.js");
    var router = require("express").Router();
    
    // Create a new Prescription
    router.post("/prescriptions", prescriptions.create);
  
    // Retrieve a single Prescription with apptId
    router.get("/prescriptions/:prescID", prescriptions.findPrescriptionByPK);
    
    //Retrieve Prescription by PatientID
    router.get("/prescriptions/patientID/:patientID", prescriptions.findPrescriptionbyPatientID);

    // Update a Prescription with prescID
    router.put("/prescriptions/:patientID", prescriptions.update);
  
    // Delete a Prescription with prescID
    router.delete("/prescriptions/:prescID", prescriptions.delete);
 
    // Set base route for the endpoints
    app.use('/api', router);
  };