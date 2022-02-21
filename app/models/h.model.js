module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return Course;
};

// This Sequelize Model will represent 'courses' table in MySQL database.
// These columns will be generated automatically:
//  id, title, description, published, createdAt, updatedAt

// After initializing Sequelize, we dont need CRUD functions, Sequelize supports all:
// create a new Course: create(object)
// find a Course by id: findByPk(id)
// get all Courses: findAll()
// update a Course by id: update(data, where: { id: id })
// remove a Course: destroy(where: { id: id })
// remove all Courses: destroy(where: {})
// find all Courses by title: findAll({ where: { title: ... } })

// These functions will be used in controller
