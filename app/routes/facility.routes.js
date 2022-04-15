module.exports = app => {
    const facilities = require("../controllers/facility.controller.js");
    var router = require("express").Router();
    
    // Create a new Facility
    router.post("/facilities", facilities.create);
  
    // Retrieve a single Facility with facilityName
    router.get("/facilities/:facilityName", facilities.findFacilityByPK);

    // Update a Facility with operationNum
    router.put("/facilities/:facilityName", facilities.update);
  
    // Delete a Facility with operationNum
    router.delete("/facilities/:facilityName", facilities.delete);

    router.get("/facilities", facilities.findAllFacilites)

    // Set base route for the endpoints
    app.use('/api', router);
  };