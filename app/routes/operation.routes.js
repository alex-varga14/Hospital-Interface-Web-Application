module.exports = app => {
    const operations = require("../controllers/operation.controller.js");
    var router = require("express").Router();
    
    // Create a new Operation
    router.post("/operations", operations.create);
  
    // Retrieve a single Operation with operationNum
    router.get("/operations/:operationNum", operations.findOperationByPK);
    
    //Retrieve Operations by SurgeonID
    //router.get("/operations/surgeonID/:surgeonID", operations.findOperationbySurgeonID);

    // Update a Operation with operationNum
    router.put("/operations/:operationNum", operations.update);
  
    // Delete a Operation with operationNum
    router.delete("/operations/:operationNum", operations.delete);

    // Set base route for the endpoints
    app.use('/api', router);
  };