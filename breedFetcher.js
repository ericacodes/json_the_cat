const request = require('request');
const arg = process.argv.slice(2)[0];

// const breedFetcher = () => {
//   const arg = process.argv.slice(2)[0];
//   request('https://api.thecatapi.com/v1/breeds/search?q=' + arg, (error, body) => {
//     console.log('error:', error);
//     const data = JSON.parse(body.body);
//     console.log(data[0].description);
//   });
// };

// module.exports = breedFetcher;

request('https://api.thecatapi.com/v1/breeds/search?q=' + arg, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    (!data.length) ? console.log("Breed not found.") : console.log(data[0].description);
  }
});
