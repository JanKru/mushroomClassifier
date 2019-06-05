const assert = require('chai').assert;
const expect = require('chai').expect;
const csvAttributeParser = require('../mushroomClassifier/csvAttributeParser');

describe('csvAttributeParse - getClass', function() {
  describe('with e as parameter', function() {
    it('should 0 as edible', function() {
      expect(csvAttributeParser.getClass('e')).to.equal(0);
    });
  });
  describe('with p as parameter', function() {
    it('should 1 as poisonous', function() {
      expect(csvAttributeParser.getClass('p')).to.equal(1);
    });
  });
  describe('with not e or p as parameter', function() {
    it('should 1 as poisonous', function() {
      expect(csvAttributeParser.getClass).to.throw('Parameter can not be parsed');
    });
  });
});
console.log('hiii');
