const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Hammond', 20);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 30);
    dinosaur3 = new Dinosaur('t-rex', 'herbivore', 60);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Hammond');
  });
  
  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [])
  } );

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur)
    const actual = park.dinoCollection.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur);
    park.removeDinosaur(dinosaur);
    const actual = park.dinoCollection.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.mostPopularDino()
    assert.strictEqual(actual, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findAllByType('t-rex')
    assert.deepStrictEqual(actual, [dinosaur, dinosaur3])
  });
    
  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVisitorsPerDay()
    assert.strictEqual(actual, 140)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.visitorsPerYear()
    assert.strictEqual(actual, 51100)
  });
    

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.annualRevenue(park);
    assert.strictEqual(actual, 1022000);
  });

});
