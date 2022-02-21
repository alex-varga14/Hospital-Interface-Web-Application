//iimport necessary modules
// Express; building REST api
// cors provides Express midware to enable options
const express = require("express");
const cors = require("cors");

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

const db = require("./app/models");

db.sequelize.sync();
// drop the table if it already exists
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

//require("./app/routes/cc.routes")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
