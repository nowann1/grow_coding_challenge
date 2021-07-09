const express = require("express");
const path = require("path");
const logger = require("morgan");
// const bodyParser = require("body-parser")
const app = express();
const port = 5000;
const appRouter = require("./routes/swapi_routes");

app.use(logger("dev"));
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json())

app.use("/", appRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
