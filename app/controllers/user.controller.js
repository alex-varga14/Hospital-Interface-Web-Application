//  There are 4 functions:
// – /api/test/all for public access
// – /api/test/user for loggedin users (role: user/doctor/patient/surgeon)
// – /api/test/doctor for users having doctor role
// – /api/test/patient for users having patient role
// – /api/test/surgeon for users having surgeon role
 exports.allAccess = (req, res) => {
    res.status(200).send("Public Information");
  };
exports.userBoard = (req, res) => {
    res.status(200).send("User Information");
  };
exports.patientBoard = (req, res) => {
    res.status(200).send("Patient Access");
  };
exports.doctorBoard = (req, res) => {
    res.status(200).send("Doctor Access");
  };
exports.surgeonBoard = (req, res) => {
    res.status(200).send("Surgeon Access");
  };