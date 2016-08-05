const compose = require('../lib/compose.js').compose
const composeLeft = require('../lib/compose.js').composeLeft
const assert = require('assert')

const addOne = x => x + 1

const double = x => 2 * x

const addNumbers = (x, y) => x + y

describe('compose', () => {
  describe('compose(double, addNumbers)(1,2)', () => {
    it('should equal 6', () => {
      assert.equal(compose(double, addNumbers)(1,2), 6)
    })
  })
  describe('compose(double, addOne)(1)', () => {
    it('should equal 4', () => {
      assert.equal(compose(double, addOne)(1), 4)
    })
  })
})

describe('composeLeft', () => {
  describe('composeLeft(addNumber, double)(1,2)', () => {
    it('should equal 6', () => {
      assert.equal(compose(double, addNumbers)(1,2), 6)
    })
  })
  describe('composeLeft(addOne, double)(1)', () => {
    it('should equal 4', () => {
      assert.equal(compose(double, addOne)(1), 4)
    })
  })
})
