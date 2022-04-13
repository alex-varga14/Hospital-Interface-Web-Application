module.exports = app => {
    const bills = require("../controllers/bill.controller.js");
    var router = require("express").Router();

    // Create a new Bill
    router.post("/bills", bills.create);
    
    // Retrieve a single Bill with billID
    router.get("/bills/:billID", bills.findBillByPK);
    
    //Retrieve bills by PatientID
    router.get("/bills/patientID/:patientID", bills.findBillbyPatientID);

    // Update a bills with billID
    router.put("/bills/:billID", bills.update);
  
    // Delete a bills with id
    router.delete("/bills/:billID", bills.delete);
    
    // Set base route for the endpoints
    app.use('/api', router);
};