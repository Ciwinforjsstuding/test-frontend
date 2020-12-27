const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 5000;
const optionCors = {
  origin: "http://localhost:3000"
};

const app = express();

const connectDb = require("./db");
const tableLine = require("./models/tableLine");

app.use(cors(optionCors));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/get_table_lines", async ( req, res ) => {
  try {
    const allTableLines = await tableLine.find();
    return res.json(allTableLines);
  } catch (err) {console.log("Error:", JSON.stringify(err))}
});

app.post("/add_table_line", async ( req, res ) => {
  const { SELECTED_FIRSTNAME, SELECTED_LASTNAME, SELECTED_EMAIL, SELECTED_PHONE, address, SELECTED_DESCRIPTION } = req.body;
  try {
    const newTableLine = new tableLine({
      SELECTED_FIRSTNAME,
      SELECTED_LASTNAME,
      SELECTED_EMAIL,
      SELECTED_PHONE,
      address,
      SELECTED_DESCRIPTION,
    });
    await newTableLine.save();
    return res.json(newTableLine);
  } catch (err) {console.log("Error:", JSON.stringify(err))}
});

connectDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server work at ${PORT}`))
  })
  .catch(err => console.log("Error:", JSON.stringify(err)));