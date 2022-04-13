//import necessary modules
// Express; building REST api
// cors provides Express midware to enable options
const express = require("express");
const cors = require("cors");

//for cookies, stores the session data on the client with a cookie
const cookieSession = require("cookie-session");

// Create an Express app
const app = express();
// set Origin
var corsOptions = {
  origin: "http://localhost:8081"
};
// add cors using app.use()
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "hospital-session",
    // keys: ['key1', 'key2'], - sign and verify cookie values, Set cookies are always signed with keys[0]
    secret: "COOKIE_SECRET", //should use as secret env var
    httpOnly: true //indicate that the cookie is only to be sent over HTTP(s) and not made available to client JS
  })
);

const db = require("./app/models");

db.sequelize.sync();
// drop the table if it already exists : 
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route for GET
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Healthcare Interface application." });
});

// app.get('/'/, function (req, res) => {
//   res.sendFile(path + "index.html");
// });

require("./app/routes/auth.routes")(app)
require("./app/routes/user.routes")(app)
require("./app/routes/patient.routes")(app)
require("./app/routes/appointment.routes")(app)
require("./app/routes/prescription.routes")(app)
require("./app/routes/bill.routes")(app)
require("./app/routes/disorder.routes")(app)
require("./app/routes/facility.routes")(app)
require("./app/routes/emergencyContact.routes")(app)
require("./app/routes/operation.routes")(app)
require("./app/routes/vaccine.routes")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});