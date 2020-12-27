const { Schema, model } = require("mongoose");

const tableLine = new Schema({
  SELECTED_FIRSTNAME: { type: String },
  SELECTED_LASTNAME: { type: String },
  SELECTED_EMAIL: { type: String },
  SELECTED_PHONE: { type: String },
  address: {
    SELECTED_STREET_ADRESS: { type: String},
    SELECTED_CITY: { type: String },
    SELECTED_STATE: { type: String },
    SELECTED_ZIP: { type: Number },
  },
  SELECTED_DESCRIPTION: { type: String },
});

module.exports = model("tableLine", tableLine);