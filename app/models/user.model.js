module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });
  
  return User;
};

// module.exports = (sequelize, Sequelize) => {
//     const User = sequelize.define("User", {
//         UserID: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true
//         },
//         Username: {
//             type: Sequelize.STRING
//         },
//         Email: {
//             type: Sequelize.STRING
//         },
//         Password: {
//             type: Sequelize.STRING
//         },
//         DOB: {
//             type: Sequelize.DATE
//         }
//       },
//       {
//         timestamps: false
//       }
//     );
  
//     return User;
//   };