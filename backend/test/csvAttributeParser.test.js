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
    it('should throw error', function() {
      expect(() => csvAttributeParser.getClass('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getCapShape', function() {
  describe('with b as parameter', function() {
    it('should 0 as bell', function() {
      expect(csvAttributeParser.getCapShape('b')).to.equal(0);
    });
  });
  describe('with c as parameter', function() {
    it('should 1 as conical', function() {
      expect(csvAttributeParser.getCapShape('c')).to.equal(1);
    });
  });
  describe('with x as parameter', function() {
    it('should 2 as convex', function() {
      expect(csvAttributeParser.getCapShape('x')).to.equal(2);
    });
  });
  describe('with f as parameter', function() {
    it('should 3 as flat', function() {
      expect(csvAttributeParser.getCapShape('f')).to.equal(3);
    });
  });
  describe('with k as parameter', function() {
    it('should 4 as knobbed', function() {
      expect(csvAttributeParser.getCapShape('k')).to.equal(4);
    });
  });
  describe('with s as parameter', function() {
    it('should 5 as sunken', function() {
      expect(csvAttributeParser.getCapShape('s')).to.equal(5);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getCapShape('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getCapSurface', function() {
  describe('with f as parameter', function() {
    it('should 0 as fibrous', function() {
      expect(csvAttributeParser.getCapSurface('f')).to.equal(0);
    });
  });
  describe('with g as parameter', function() {
    it('should 1 as grooves', function() {
      expect(csvAttributeParser.getCapSurface('g')).to.equal(1);
    });
  });
  describe('with y as parameter', function() {
    it('should 2 as scaly', function() {
      expect(csvAttributeParser.getCapSurface('y')).to.equal(2);
    });
  });
  describe('with s as parameter', function() {
    it('should 3 as smooth', function() {
      expect(csvAttributeParser.getCapSurface('s')).to.equal(3);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getCapSurface('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getCapColor', function() {
  describe('with n as parameter', function() {
    it('should 0 as brown', function() {
      expect(csvAttributeParser.getCapColor('n')).to.equal(0);
    });
  });
  describe('with b as parameter', function() {
    it('should 1 as buff', function() {
      expect(csvAttributeParser.getCapColor('b')).to.equal(1);
    });
  });
  describe('with c as parameter', function() {
    it('should 2 as cinnamon', function() {
      expect(csvAttributeParser.getCapColor('c')).to.equal(2);
    });
  });
  describe('with g as parameter', function() {
    it('should 3 as gray', function() {
      expect(csvAttributeParser.getCapColor('g')).to.equal(3);
    });
  });
  describe('with r as parameter', function() {
    it('should 4 as green', function() {
      expect(csvAttributeParser.getCapColor('r')).to.equal(4);
    });
  });
  describe('with p as parameter', function() {
    it('should 5 as pink', function() {
      expect(csvAttributeParser.getCapColor('p')).to.equal(5);
    });
  });
  describe('with u as parameter', function() {
    it('should 6 as purple', function() {
      expect(csvAttributeParser.getCapColor('u')).to.equal(6);
    });
  });
  describe('with e as parameter', function() {
    it('should 7 as red', function() {
      expect(csvAttributeParser.getCapColor('e')).to.equal(7);
    });
  });
  describe('with w as parameter', function() {
    it('should 8 as white', function() {
      expect(csvAttributeParser.getCapColor('w')).to.equal(8);
    });
  });
  describe('with y as parameter', function() {
    it('should 9 as yellow', function() {
      expect(csvAttributeParser.getCapColor('y')).to.equal(9);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getCapColor('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getBruises', function() {
  describe('with t as parameter', function() {
    it('should 0 as bruises', function() {
      expect(csvAttributeParser.getBruises('t')).to.equal(0);
    });
  });
  describe('with f as parameter', function() {
    it('should 1 as no', function() {
      expect(csvAttributeParser.getBruises('f')).to.equal(1);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getBruises('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getOdor', function() {
  describe('with a as parameter', function() {
    it('should 0 as almond', function() {
      expect(csvAttributeParser.getOdor('a')).to.equal(0);
    });
  });
  describe('with l as parameter', function() {
    it('should 1 as anise', function() {
      expect(csvAttributeParser.getOdor('l')).to.equal(1);
    });
  });
  describe('with c as parameter', function() {
    it('should 2 as cresote', function() {
      expect(csvAttributeParser.getOdor('c')).to.equal(2);
    });
  });
  describe('with y as parameter', function() {
    it('should 3 as fishy', function() {
      expect(csvAttributeParser.getOdor('y')).to.equal(3);
    });
  });
  describe('with f as parameter', function() {
    it('should 4 as foul', function() {
      expect(csvAttributeParser.getOdor('f')).to.equal(4);
    });
  });
  describe('with m as parameter', function() {
    it('should 5 as musty', function() {
      expect(csvAttributeParser.getOdor('m')).to.equal(5);
    });
  });
  describe('with n as parameter', function() {
    it('should 6 as none', function() {
      expect(csvAttributeParser.getOdor('n')).to.equal(6);
    });
  });
  describe('with p as parameter', function() {
    it('should 7 as pungent', function() {
      expect(csvAttributeParser.getOdor('p')).to.equal(7);
    });
  });
  describe('with s as parameter', function() {
    it('should 8 as spicy', function() {
      expect(csvAttributeParser.getOdor('s')).to.equal(8);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getOdor('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});


describe('csvAttributeParse - getGillAttachment', function() {
  describe('with a as parameter', function() {
    it('should 0 as attached', function() {
      expect(csvAttributeParser.getGillAttachment('a')).to.equal(0);
    });
  });
  describe('with d as parameter', function() {
    it('should 1 as descending', function() {
      expect(csvAttributeParser.getGillAttachment('d')).to.equal(1);
    });
  });
  describe('with f as parameter', function() {
    it('should 2 as free', function() {
      expect(csvAttributeParser.getGillAttachment('f')).to.equal(2);
    });
  });
  describe('with n as parameter', function() {
    it('should 3 as notched', function() {
      expect(csvAttributeParser.getGillAttachment('n')).to.equal(3);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getGillAttachment('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getGillSpacing', function() {
  describe('with c as parameter', function() {
    it('should 0 as closed', function() {
      expect(csvAttributeParser.getGillSpacing('c')).to.equal(0);
    });
  });
  describe('with w as parameter', function() {
    it('should 1 as crowded', function() {
      expect(csvAttributeParser.getGillSpacing('w')).to.equal(1);
    });
  });
  describe('with d as parameter', function() {
    it('should 2 as distant', function() {
      expect(csvAttributeParser.getGillSpacing('d')).to.equal(2);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getGillSpacing('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getGillSize', function() {
  describe('with b as parameter', function() {
    it('should 0 as broad', function() {
      expect(csvAttributeParser.getGillSize('b')).to.equal(0);
    });
  });
  describe('with n as parameter', function() {
    it('should 1 as narrow', function() {
      expect(csvAttributeParser.getGillSize('n')).to.equal(1);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getGillSize('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getGillColor', function() {
  describe('with k as parameter', function() {
    it('should 0 as black', function() {
      expect(csvAttributeParser.getGillColor('k')).to.equal(0);
    });
  });
  describe('with n as parameter', function() {
    it('should 1 as brown', function() {
      expect(csvAttributeParser.getGillColor('n')).to.equal(1);
    });
  });
  describe('with b as parameter', function() {
    it('should 2 as buff', function() {
      expect(csvAttributeParser.getGillColor('b')).to.equal(2);
    });
  });
  describe('with h as parameter', function() {
    it('should 3 as chocolate', function() {
      expect(csvAttributeParser.getGillColor('h')).to.equal(3);
    });
  });
  describe('with g as parameter', function() {
    it('should 4 as gray', function() {
      expect(csvAttributeParser.getGillColor('g')).to.equal(4);
    });
  });
  describe('with r as parameter', function() {
    it('should 5 as green', function() {
      expect(csvAttributeParser.getGillColor('r')).to.equal(5);
    });
  });
  describe('with o as parameter', function() {
    it('should 6 as orange', function() {
      expect(csvAttributeParser.getGillColor('o')).to.equal(6);
    });
  });
  describe('with p as parameter', function() {
    it('should 7 as pink', function() {
      expect(csvAttributeParser.getGillColor('p')).to.equal(7);
    });
  });
  describe('with u as parameter', function() {
    it('should 8 as purple', function() {
      expect(csvAttributeParser.getGillColor('u')).to.equal(8);
    });
  });
  describe('with e as parameter', function() {
    it('should 9 as red', function() {
      expect(csvAttributeParser.getGillColor('e')).to.equal(9);
    });
  });
  describe('with w as parameter', function() {
    it('should 10 as white', function() {
      expect(csvAttributeParser.getGillColor('w')).to.equal(10);
    });
  });
  describe('with y as parameter', function() {
    it('should 11 as yellow', function() {
      expect(csvAttributeParser.getGillColor('y')).to.equal(11);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getGillColor('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getStalkShape', function() {
  describe('with e as parameter', function() {
    it('should 0 as enlarging', function() {
      expect(csvAttributeParser.getStalkShape('e')).to.equal(0);
    });
  });
  describe('with t as parameter', function() {
    it('should 1 as tapering', function() {
      expect(csvAttributeParser.getStalkShape('t')).to.equal(1);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getStalkShape('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getStalkRoot', function() {
  describe('with b as parameter', function() {
    it('should 0 as bulbous', function() {
      expect(csvAttributeParser.getStalkRoot('b')).to.equal(0);
    });
  });
  describe('with c as parameter', function() {
    it('should 1 as club', function() {
      expect(csvAttributeParser.getStalkRoot('c')).to.equal(1);
    });
  });
  describe('with u as parameter', function() {
    it('should 2 as cup', function() {
      expect(csvAttributeParser.getStalkRoot('u')).to.equal(2);
    });
  });
  describe('with e as parameter', function() {
    it('should 3 as equla', function() {
      expect(csvAttributeParser.getStalkRoot('e')).to.equal(3);
    });
  });
  describe('with z as parameter', function() {
    it('should 4 as rhizomorphs', function() {
      expect(csvAttributeParser.getStalkRoot('z')).to.equal(4);
    });
  });
  describe('with r as parameter', function() {
    it('should 5 as rooted', function() {
      expect(csvAttributeParser.getStalkRoot('r')).to.equal(5);
    });
  });
  describe('with ? as parameter', function() {
    it('should 6 as missing', function() {
      expect(csvAttributeParser.getStalkRoot('?')).to.equal(6);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getStalkRoot('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getStalkSurfaceAbove and getStalkSurfaceBelow', function() {
  describe('with f as parameter', function() {
    it('should 0 as fibrous', function() {
      expect(csvAttributeParser.getStalkSurfaceRing('f')).to.equal(0);
    });
  });
  describe('with y as parameter', function() {
    it('should 1 as scaly', function() {
      expect(csvAttributeParser.getStalkSurfaceRing('y')).to.equal(1);
    });
  });
  describe('with u as parameter', function() {
    it('should 2 as cup', function() {
      expect(csvAttributeParser.getStalkSurfaceRing('k')).to.equal(2);
    });
  });
  describe('with s as parameter', function() {
    it('should 3 as smooth', function() {
      expect(csvAttributeParser.getStalkSurfaceRing('s')).to.equal(3);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getStalkSurfaceRing('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getStalkColorAboveRing and getStalkColorAboveBelow', function() {
  describe('with n as parameter', function() {
    it('should 0 as brown', function() {
      expect(csvAttributeParser.getStalkColorRing('n')).to.equal(0);
    });
  });
  describe('with b as parameter', function() {
    it('should 1 as buff', function() {
      expect(csvAttributeParser.getStalkColorRing('b')).to.equal(1);
    });
  });
  describe('with c as parameter', function() {
    it('should 2 as cinnamon', function() {
      expect(csvAttributeParser.getStalkColorRing('c')).to.equal(2);
    });
  });
  describe('with g as parameter', function() {
    it('should 3 as gray', function() {
      expect(csvAttributeParser.getStalkColorRing('g')).to.equal(3);
    });
  });
  describe('with o as parameter', function() {
    it('should 4 as orange', function() {
      expect(csvAttributeParser.getStalkColorRing('o')).to.equal(4);
    });
  });
  describe('with p as parameter', function() {
    it('should 5 as pink', function() {
      expect(csvAttributeParser.getStalkColorRing('p')).to.equal(5);
    });
  });
  describe('with e as parameter', function() {
    it('should 6 as red', function() {
      expect(csvAttributeParser.getStalkColorRing('e')).to.equal(6);
    });
  });
  describe('with w as parameter', function() {
    it('should 7 as white', function() {
      expect(csvAttributeParser.getStalkColorRing('w')).to.equal(7);
    });
  });
  describe('with y as parameter', function() {
    it('should 8 as yellow', function() {
      expect(csvAttributeParser.getStalkColorRing('y')).to.equal(8);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getStalkColorRing('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getVeilType', function() {
  describe('with p as parameter', function() {
    it('should 0 as partial', function() {
      expect(csvAttributeParser.getVeilType('p')).to.equal(0);
    });
  });
  describe('with u as parameter', function() {
    it('should 1 as universal', function() {
      expect(csvAttributeParser.getVeilType('u')).to.equal(1);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getVeilType('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getVeilColor', function() {
  describe('with n as parameter', function() {
    it('should 0 as brown', function() {
      expect(csvAttributeParser.getVeilColor('n')).to.equal(0);
    });
  });
  describe('with o as parameter', function() {
    it('should 1 as orange', function() {
      expect(csvAttributeParser.getVeilColor('o')).to.equal(1);
    });
  });
  describe('with w as parameter', function() {
    it('should 2 as white', function() {
      expect(csvAttributeParser.getVeilColor('w')).to.equal(2);
    });
  });
  describe('with y as parameter', function() {
    it('should 3 as yellow', function() {
      expect(csvAttributeParser.getVeilColor('y')).to.equal(3);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getVeilColor('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getSporePrintColor', function() {
  describe('with k as parameter', function() {
    it('should 0 as black', function() {
      expect(csvAttributeParser.getSporePrintColor('k')).to.equal(0);
    });
  });
  describe('with n as parameter', function() {
    it('should 1 as brown', function() {
      expect(csvAttributeParser.getSporePrintColor('n')).to.equal(1);
    });
  });
  describe('with c as parameter', function() {
    it('should 2 as cinnamon', function() {
      expect(csvAttributeParser.getSporePrintColor('c')).to.equal(2);
    });
  });
  describe('with b as parameter', function() {
    it('should 3 as buff', function() {
      expect(csvAttributeParser.getSporePrintColor('b')).to.equal(3);
    });
  });
  describe('with h as parameter', function() {
    it('should 4 as chocolate', function() {
      expect(csvAttributeParser.getSporePrintColor('h')).to.equal(4);
    });
  });
  describe('with r as parameter', function() {
    it('should 5 as green', function() {
      expect(csvAttributeParser.getSporePrintColor('r')).to.equal(5);
    });
  });
  describe('with o as parameter', function() {
    it('should 6 as orange', function() {
      expect(csvAttributeParser.getSporePrintColor('o')).to.equal(6);
    });
  });
  describe('with u as parameter', function() {
    it('should 7 as purple', function() {
      expect(csvAttributeParser.getSporePrintColor('u')).to.equal(7);
    });
  });
  describe('with w as parameter', function() {
    it('should 8 as white', function() {
      expect(csvAttributeParser.getSporePrintColor('w')).to.equal(8);
    });
  });
  describe('with y as parameter', function() {
    it('should 9 as yellow', function() {
      expect(csvAttributeParser.getSporePrintColor('y')).to.equal(9);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getSporePrintColor('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getRingNumber', function() {
  describe('with n as parameter', function() {
    it('should 0 as none', function() {
      expect(csvAttributeParser.getRingNumber('n')).to.equal(0);
    });
  });
  describe('with o as parameter', function() {
    it('should 1 as one', function() {
      expect(csvAttributeParser.getRingNumber('o')).to.equal(1);
    });
  });
  describe('with t as parameter', function() {
    it('should 2 as two', function() {
      expect(csvAttributeParser.getRingNumber('t')).to.equal(2);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getRingNumber('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getRingType', function() {
  describe('with c as parameter', function() {
    it('should 0 as cobwebby', function() {
      expect(csvAttributeParser.getRingType('c')).to.equal(0);
    });
  });
  describe('with e as parameter', function() {
    it('should 1 as evanescent', function() {
      expect(csvAttributeParser.getRingType('e')).to.equal(1);
    });
  });
  describe('with f as parameter', function() {
    it('should 2 as flaring', function() {
      expect(csvAttributeParser.getRingType('f')).to.equal(2);
    });
  });
  describe('with l as parameter', function() {
    it('should 3 as large', function() {
      expect(csvAttributeParser.getRingType('l')).to.equal(3);
    });
  });
  describe('with r as parameter', function() {
    it('should 4 as green', function() {
      expect(csvAttributeParser.getRingType('r')).to.equal(4);
    });
  });
  describe('with n as parameter', function() {
    it('should 5 as none', function() {
      expect(csvAttributeParser.getRingType('n')).to.equal(5);
    });
  });
  describe('with p as parameter', function() {
    it('should 6 as pendant', function() {
      expect(csvAttributeParser.getRingType('p')).to.equal(6);
    });
  });
  describe('with s as parameter', function() {
    it('should 7 as sheathing', function() {
      expect(csvAttributeParser.getRingType('s')).to.equal(7);
    });
  });
  describe('with z as parameter', function() {
    it('should 8 as zone', function() {
      expect(csvAttributeParser.getRingType('z')).to.equal(8);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getRingType('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});
describe('csvAttributeParse - getPopulation', function() {
  describe('with a as parameter', function() {
    it('should 0 as abundant', function() {
      expect(csvAttributeParser.getPopulation('a')).to.equal(0);
    });
  });
  describe('with c as parameter', function() {
    it('should 1 as clustered', function() {
      expect(csvAttributeParser.getPopulation('c')).to.equal(1);
    });
  });
  describe('with n as parameter', function() {
    it('should 2 as numerous', function() {
      expect(csvAttributeParser.getPopulation('n')).to.equal(2);
    });
  });
  describe('with s as parameter', function() {
    it('should 3 as scattered', function() {
      expect(csvAttributeParser.getPopulation('s')).to.equal(3);
    });
  });
  describe('with v as parameter', function() {
    it('should 4 as several', function() {
      expect(csvAttributeParser.getPopulation('v')).to.equal(4);
    });
  });
  describe('with y as parameter', function() {
    it('should 5 as solitary', function() {
      expect(csvAttributeParser.getPopulation('y')).to.equal(5);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getPopulation('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});

describe('csvAttributeParse - getHabitat', function() {
  describe('with g as parameter', function() {
    it('should 0 as grasses', function() {
      expect(csvAttributeParser.getHabitat('g')).to.equal(0);
    });
  });
  describe('with l as parameter', function() {
    it('should 1 as leaves', function() {
      expect(csvAttributeParser.getHabitat('l')).to.equal(1);
    });
  });
  describe('with m as parameter', function() {
    it('should 2 as meadows', function() {
      expect(csvAttributeParser.getHabitat('m')).to.equal(2);
    });
  });
  describe('with p as parameter', function() {
    it('should 3 as paths', function() {
      expect(csvAttributeParser.getHabitat('p')).to.equal(3);
    });
  });
  describe('with u as parameter', function() {
    it('should 4 as urban', function() {
      expect(csvAttributeParser.getHabitat('u')).to.equal(4);
    });
  });
  describe('with w as parameter', function() {
    it('should 5 as waste', function() {
      expect(csvAttributeParser.getHabitat('w')).to.equal(5);
    });
  });
  describe('with d as parameter', function() {
    it('should 6 as woods', function() {
      expect(csvAttributeParser.getHabitat('d')).to.equal(6);
    });
  });
  describe('with not accepted parameter', function() {
    it('should throw error', function() {
      expect(() => csvAttributeParser.getHabitat('2')).to.throw('Parameter (2) can not be parsed');
    });
  });
});
