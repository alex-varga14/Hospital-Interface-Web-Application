module.exports = app => {
    const disorders = require("../controllers/disorder.controller.js");
    var router = require("express").Router();

    // Create a new Disorder
    router.post("/disorders", disorders.create);
    
    // Retrieve a single Disorder with disorderName
    router.get("/disorders/:disorderName", disorders.findDisorderByPK);
    
    //Retrieve Disorders by PatientID
    router.get("/disorders/patientID/:patientID", disorders.findDisorderbyPatientID);

    // Update a Disorders with patientID
    router.put("/prescriptions/:patientID", disorders.update);

    // Delete a Disorders with id
    router.delete("/disorders/:disorderName", disorders.delete);
    
    // Set base route for the endpoints
    app.use('/api', router);
};