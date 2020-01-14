// Here are some tests for some of JavaScript's built-in Array methods
var chai = require('chai')
var expect = chai.expect

describe('Array', function() {
  describe('#push()', function() {
    it('should add an item to the array', function() {
      var array = [1, 2, 3, 4]
      array.push(5)
      expect(array).to.deep.equal([1, 2, 3, 4, 5])//tests if 5 is appended to the array
    })

    it('should alter the length properly', function() {
      var array = [1, 1, 1, 1]
      array.push(1)
      expect(array.length).to.equal(5)//tests if the number of items in the array is 5
    })
  })
  describe('#pop()', function(){
	it('Should be one less in size', function() {
		var array = [1, 2, 3, 4, 5];
		let popped = array.pop(4);
		expect(array.length).to.equal(4);//tests to see if the number of items has decresed
	})
	it('Should return the popped object', function(){
		var array = [1, 2, 3, 4, 5];
		let popped = array.pop(4);
		expect(popped).to.equal(5);
	})
  })
})
