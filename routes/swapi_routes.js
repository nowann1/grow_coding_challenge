const { default: axios } = require("axios");
const { json } = require("body-parser");
const { response } = require("express");
const express = require("express");
const router = express.Router();

router.get("/people:sortBy?", async (req, res) => {
  let sortBy = req.query.sortBy || "";
  let response = await getDataFromSWAPI("people");

  if (sortBy == "name" || sortBy == "height" || sortBy == "mass") {
    response.sort((a, b) => a[sortBy].localeCompare(b[sortBy], undefined, { numeric: true }))
  }
  res.send("Hello World! " + JSON.stringify(response)).status(200);
});

router.get("/planets", async (req, res) => {
  let response = await getDataFromSWAPI("planets");
  res.send("Hello World!!" + JSON.stringify(response)).status(200);
});

module.exports = router;

//Another solution
// response.sort(function(a,b){
//   var a1=typeof a[sortBy], b1=typeof b[sortBy];
//   return a1<b1 ? -1 : a1>b1 ? 1 : a[sortBy]<b[sortBy] ? -1 : a[sortBy]>b[sortBy] ? 1 : 0;
// });

// let promises = [];

// for (let i = 0; i < requests.length; i++) {
//     promises.push(axios.get(request[i].url, { params: {...} }));
// }

// axios.all(promises)
//     .then(axios.spread((...args) => {
//         for (let i = 0; i < args.length; i++) {
//             myObject[args[i].config.params.saveLocation] = args[i].data;
//         }
//     }))
//     .then(/* use the data */);


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
