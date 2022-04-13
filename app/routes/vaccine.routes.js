module.exports = app => {
    const vaccines = require("../controllers/vaccine.controller.js");
    var router = require("express").Router();
    
    // Create a new Vaccine
    router.post("/vaccines", vaccines.create);
  
    // Retrieve a single Vaccine with batchNum
    router.get("/vaccines/:batchNum", vaccines.findVaccineByPK);
    
    //Retrieve Vaccines by PatientID
    router.get("/vaccines/patientID/:patientID", vaccines.findVaccinebyPatientID);

    // Update a Vaccine with patientID
    router.put("/vaccines/:patientID", vaccines.update);
  
    // Delete a Vaccine with patientID
    router.delete("/vaccines/:patientID", vaccines.delete);

    // Set base route for the endpoints
    app.use('/api', router);
  };