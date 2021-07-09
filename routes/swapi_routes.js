const { default: axios } = require("axios");
const { json } = require("body-parser");
const { response } = require("express");
const express = require("express");
const router = express.Router();

router.get("/people:sortBy?", async (req, res) => {
  let sortBy = req.query.sortBy || "";

  let response = await getDataFromSWAPI("people");
  // if (sortBy == "name" || sortBy == "height" || sortBy == "") {
  // }
  res.send("Hello World! " + JSON.stringify(response)).status(200);
});

router.get("/planets", async (req, res) => {
  let response = await getDataFromSWAPI("planets");
  res.send("Hello World!!" + JSON.stringify(response)).status(200);
});

module.exports = router;

let sortArray = (reqData) => {};

const getDataFromSWAPI = async (pathURL) => {
  let results = [];
  var page = 1;

  try {
    while (page != null) {
      const response = await axios.get(
        "https://swapi.dev/api/" + pathURL + "?page=" + page
      );
      results = results.concat(response.data.results);
      console.log("Next page: " + response.data.next);
      if (response.data.next == null) {
        break;
      } else {
        page++;
      }
    }
  } catch (error) {
    console.error("ERROR! " + error);
  }
  return results;
};
