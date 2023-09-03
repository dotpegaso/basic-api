require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require("./routes/routes");

const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(bodyParser.json());
app.use("/api", routes);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
