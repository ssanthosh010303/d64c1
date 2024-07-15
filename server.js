/*
 * Author: Apache X692 Attack Helicopter
 * Created on: 15/07/2024
 */
const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on \"http://0.0.0.0:3000\".");
});
