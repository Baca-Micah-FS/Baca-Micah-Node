const express = require("express");
const routeHandler = require("./routes");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).json({ message: "From base route", success: true });
});

app.use("/api/v1", routeHandler);

module.exports = app;
