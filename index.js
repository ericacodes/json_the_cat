const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) { // request error
    console.log('Error fetch details:', error);
  } else { // no request error. valid description will print description. invalid description will print null
    console.log(desc);
  }
});