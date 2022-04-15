module.exports = app => {
    const surgeons = require("../controllers/surgeon.controller.js");
    var router = require("express").Router();
    
    // Create a new doctor
    router.post("/surgeons", surgeons.create);
  
    // Retrieve a single surgeons with userId
    router.get("/surgeons/:userID", surgeons.findSurgeonByPK);
   
    // Update a surgeon with userID
    router.put("/surgeons/:userId", surgeons.update);
  
    // Delete a surgeons with id
    router.delete("/surgeons/:userId", surgeons.delete);

    //get All surgeons and aggregate data
    router.get("/surgeons", surgeons.findAllSurgeons)

    // Set base route for the endpoints
    app.use('/api', router);
  };