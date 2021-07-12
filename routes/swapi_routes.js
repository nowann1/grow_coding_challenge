const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const util = require("../util/util");

router.get("/people:sortBy?", async (req, res) => {
  try {
    let sortBy = req.query.sortBy || "";
    let response = await util.getDataFromSWAPI("people");

    if (sortBy === "name" || sortBy === "height" || sortBy === "mass") {
      response.sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy], undefined, { numeric: true })
      );
    }
    res.send(JSON.stringify(response)).status(200);
  } catch (error) {
    res.send("ERROR! :" + error).status(400);
  }
});

router.get("/planets", async (req, res) => {
  try {
    let dataFromSwapi = await util.getDataFromSWAPI("planets");
    let response = await util.getNameFromResidentsURL(dataFromSwapi);
    res.send(JSON.stringify(response)).status(200);
  } catch (error) {
    res.send("ERROR! :" + error).status(400);
  }
});

module.exports = router;
