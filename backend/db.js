const mongoose = require("mongoose");

const mongoUrl = "mongodb+srv://Stepa:12345@cluster0.lbbse.mongodb.net/db?retryWrites=true&w=majority";

const connectDb = () => {
  return mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })};

module.exports = connectDb;