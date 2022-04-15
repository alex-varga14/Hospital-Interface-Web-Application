const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: 3306,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.patient = require("../models/patient.model.js")(sequelize, Sequelize);
db.surgeon = require("../models/surgeon.model.js")(sequelize, Sequelize);
db.emergencycontact = require("../models/emergencyContact.model.js")(sequelize, Sequelize);
db.doctor = require("../models/doctor.model.js")(sequelize, Sequelize);
db.surgeon = require("../models/patient.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.appointment = require("../models/appointment.model.js")(sequelize, Sequelize);
db.bill = require("../models/bill.model.js")(sequelize, Sequelize);
db.disorder = require("../models/disorder.model.js")(sequelize, Sequelize);
db.facility = require("../models/facility.model.js")(sequelize, Sequelize);
db.operation = require("../models/operation.model.js")(sequelize, Sequelize);
db.prescription = require("../models/prescription.model.js")(sequelize, Sequelize);
db.vaccine = require("../models/vaccine.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
  timestamps: false
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
  timestamps: false
});

db.ROLES = ["user", "patient", "doctor", "surgeon"];

module.exports = db;