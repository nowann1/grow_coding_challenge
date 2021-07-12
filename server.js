const express = require("express");
const logger = require("morgan");
const app = express();
const port = 5000;
const appRouter = require("./routes/swapi_routes");

app.use(logger("dev"));

app.use("/", appRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
