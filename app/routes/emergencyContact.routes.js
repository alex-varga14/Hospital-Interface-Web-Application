module.exports = app => {
    const emergencyContacts = require("../controllers/emergencyContact.controller.js");
    var router = require("express").Router();

    // Create a new emergency Contact
    router.post("/emergency-contacts", emergencyContacts.create);
    
    //Retrieve emergency Contact by PatientID
    router.get("/emergency-contacts/patientID/:id", emergencyContacts.findEmergencyContactbyPatientID);

    // Delete a emergency Contact with patientID
    router.delete("/emergency-contacts/:patientID", emergencyContacts.delete);
    
    // Set base route for the endpoints
    app.use('/api', router);
};