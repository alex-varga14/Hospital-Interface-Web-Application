module.exports = app => {
    const bills = require("../controllers/bill.controller.js");
    var router = require("express").Router();

    // Create a new Bill
    router.post("/bills", bills.create);
    
    // Retrieve a single Bill with billID
    // router.get("/bills/:billID", bills.findBillByPK);
    
    //Retrieve bills by PatientID
    router.get("/bills/:id", bills.findBillbyPatientID);

    // Update a bills with patientID
    router.put("/bills/:patientID", bills.update);
  
    // Delete a bills with id
    router.delete("/bills/:billID", bills.delete);

     //get All bills and aggregate data
     router.get("/bills", bills.findAllBills)
    
    // Set base route for the endpoints
    app.use('/api', router);
};