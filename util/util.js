const { default: axios } = require("axios");

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

  module.exports = {getDataFromSWAPI};

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