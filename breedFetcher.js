const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    if (error || !data.length) {
      callback(error, null);
    } else {
      callback(null, data[0].description.trim());

    }
    // if (response.statusCode !== 200) { // unsuccessful handling of http request 
    //   callback(response.statusCode, null);
    // } else if (error) { // unsuccessful http request 
    //   callback(error, null);
    // } else if (data.length) {
    //   callback(null, data[0].description.trim());
    // } else {
    //   callback(null, "Breed not found");
    // }
  });
};

module.exports = { fetchBreedDescription };