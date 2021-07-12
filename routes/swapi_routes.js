const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const util = require("../util/util");

router.get("/people:sortBy?", async (req, res) => {
  let sortBy = req.query.sortBy || "";
  let response = await util.getDataFromSWAPI("people");

  if (sortBy == "name" || sortBy == "height" || sortBy == "mass") {
    response.sort((a, b) =>
      a[sortBy].localeCompare(b[sortBy], undefined, { numeric: true })
    );
  }
  res.send(JSON.stringify(response)).status(200);
});

router.get("/planets", async (req, res) => {
  let dataFromSwapi = await util.getDataFromSWAPI("planets");
  console.log(JSON.stringify(dataFromSwapi));
  let response = await util.getNameFromResidentsURL(dataFromSwapi);
  res.send(JSON.stringify(response)).status(200);
});

module.exports = router;
