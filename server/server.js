const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

let app = express();
const PORT = 5002;

app.use(bodyParser.json());

app.get("/status", (req, res) => {
  res.json({status: "ok"})
});

app.get("*", (req, res) => {

  res.sendFile(path.join(__dirname, "..", "client/public/index.html"))
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

