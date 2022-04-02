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
isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
    }
    res.status(403).send({
      message: "Require Admin Role!"
    });
    return;
  });
});
};
isModerator = (req, res, next) => {
User.findByPk(req.userId).then(user => {
  user.getRoles().then(roles => {
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        next();
        return;
      }
    }
    res.status(403).send({
      message: "Require Moderator Role!"
    });
  });
});
};
isModeratorOrAdmin = (req, res, next) => {
User.findByPk(req.userId).then(user => {
  user.getRoles().then(roles => {
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        next();
        return;
      }
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }
    res.status(403).send({
      message: "Require Moderator or Admin Role!"
    });
  });
});
};
const authJwt = {
verifyToken: verifyToken,
isAdmin: isAdmin,
isModerator: isModerator,
isModeratorOrAdmin: isModeratorOrAdmin
};
module.exports = authJwt;