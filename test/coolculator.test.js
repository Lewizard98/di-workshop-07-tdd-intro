var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

	it('should add', function() {
		result = mm.add(5,4,6,50)
		expect(result).to.equal(65)
	})


	it('should multiply', function() {
		result = mm.multiply(2, 3)
		expect(result).to.equal(6)
	})

	it('should subtract', function() {
		result = mm.subtract(3, 2)
		expect(result).to.equal(1)
	})
  
	it('should divide', function() {
		result = mm.divide(10, 2)
		expect(result).to.equal(5)
	})
  
	it('should return highest', function() {
		result = mm.highest(3, 2)
		expect(result).to.equal(3)
	})
  
	it('should return lowest', function() {
		result = mm.lowest(3, 2)
		expect(result).to.equal(2)
	})
  
	it('should double', function() {
		result = mm.double(3)
		expect(result).to.equal(6)
	})
  
    it('should square', function() {
		result = mm.square(3)
		expect(result).to.equal(9)
	})
  
    it('should raise', function() {
		result = mm.raise(5, 5)
		expect(result).to.equal(3125)
	})
    
    it('should return true is negative', function() {
		result = mm.isNegative(-10)
		expect(result).to.equal(true)
	})
  
    
    it('should return true if positive', function() {
		result = mm.isPositive(-2)
		expect(result).to.equal(false)
	})
  
	it('should return true is the first and last digits match', function() {
		result = mm.isCool(101)
		expect(result).to.equal(true);
	})
	
	it('should return a sum of the numbers', function() {
		result = mm.sum([1,2,3,4,5,20])
		expect(result).to.equal(35)
	})
	
	it('should return a product of the numbers', function() {
		result = mm.multiplyArray([1,2,3,4,5,20])
		expect(result).to.equal(2400)
	})
	
	it('should return the mean of the numbers in the array', function() {
		result = mm.mean([1,2,3,4,5,20])
		expect(result).to.equal(400);
	})
	
	it('should return the factorial of the number', function() {
		result = mm.factorial(5)
		expect(result).to.equal(120);
	})
	it('should return the factorial of the number', function() {
		result = mm.random(75)
		expect(result).to.be.within(0, 75);
	})
	
	
})
