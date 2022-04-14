const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
//To process authentication and authorization we need the functions below:
//-check if token provided is valid, get this from x-access-token of HTTP headers, then use
// jsonwebtoken's verify() func
//-check if roles of the user contains required role or not

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isPatient = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "patient") {
          next();
          return;
        }
    }
    res.status(403).send({
      message: "Require Patient Role!"
    });
    return;
  });
});
};

isDoctor = (req, res, next) => {
User.findByPk(req.userId).then(user => {
  user.getRoles().then(roles => {
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "doctor") {
        next();
        return;
      }
    }
    res.status(403).send({
      message: "Require Doctor Role!"
    });
  });
});
};

isSurgeon = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "surgeon") {
          next();
          return;
        }
    }
    res.status(403).send({
      message: "Require Surgeon Role!"
    });
    return;
  });
});
};

isDoctorOrPatient = (req, res, next) => {
User.findByPk(req.userId).then(user => {
  user.getRoles().then(roles => {
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "doctor") {
        next();
        return;
      }
      if (roles[i].name === "patient") {
        next();
        return;
      }
    }
    res.status(403).send({
      message: "Require Doctor or Patient Role!"
    });
  });
});
};

isSurgeonOrDoctor = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "surgeon") {
          next();
          return;
        }
        if (roles[i].name === "doctor") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Surgeon or Doctor Role!"
      });
    });
  });
  };

const authJwt = {
verifyToken: verifyToken,
isPatient: isPatient,
isDoctor: isDoctor,
isSurgeon: isSurgeon,
isDoctorOrPatient: isDoctorOrPatient,
isSurgeonOrDoctor: isSurgeonOrDoctor
};
module.exports = authJwt;