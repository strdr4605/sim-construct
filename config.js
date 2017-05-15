module.exports = {
  port: process.env.PORT || 8000,
  database: process.env.MONGO_URI || 'mongodb://localhost:27017/sim-construct'
};
