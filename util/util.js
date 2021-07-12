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

const getNameFromResidentsURL = async (results) => {
  let promises = [];
  var residentsArray = [];

  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < results[i].residents.length; j++) {
      promises.push(axios.get(results[i].residents[j]));
    }
  }

  try {
    await axios.all(promises).then(
      axios.spread((...args) => {
        for (let i = 0; i < args.length; i++) {
          residentsArray.push({
            url: args[i].data.url,
            name: args[i].data.name,
          });
        }
      })
    );
  } catch (error) {
    console.log("ERROR: " + error);
  }

  const respuestaResidentes = replaceResidents(results, residentsArray);
  return results;
};

const replaceResidents = (results, residentsArray) => {
  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < results[i].residents.length; j++) {
      let indexURL = residentsArray.findIndex(
        (element) => element.url == results[i].residents[j]
      );
      results[i].residents[j] = residentsArray[indexURL].name;
    }
  }
  return results;
};

module.exports = { getDataFromSWAPI, getNameFromResidentsURL };
