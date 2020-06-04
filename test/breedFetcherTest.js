const assert = require('chai').assert;
const breedFetcher = require('../breedFetcher');

describe('#breedFetcher', () => {
  it('returns correct description for Siberian', () => {
    assert.equal(breedFetcher('Siberian'), "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.");
  });
});