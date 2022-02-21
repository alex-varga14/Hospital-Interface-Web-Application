module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "123456",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
// min: minimum # of connections in pool, max: maximum # of connections in pool,
// idle: maximum time, in milsec, a connection can be idle, acquire: maximum time, in milsec, a pool will try to get a connection b4 throwing error
