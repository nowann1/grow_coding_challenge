const express = require("express");
const logger = require("morgan");
const app = express();
const PORT = 5000;
const appRouter = require("./routes/swapi_routes");

app.use(logger("dev"));

app.use("/", appRouter);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
