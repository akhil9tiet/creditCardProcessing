var expect = require('chai').expect;
const { add } = require('../src/add');

describe('credit add function test', function () {
	it('should add the name, limit and 0 balance based on the input for the user', function () {
		result = add({ name: 'Tom', card: '4111111111111111', limit: 1000, balance: 0 }, []);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Tom', limit: 1000, balance: 0 }]));
	});

	it('should add the name, limit and error as balance when the limit assigned is 0', function () {
		let result = [];
		result = add({ name: 'Ron', card: '4111111111111111', limit: 0, balance: 0 }, []);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Ron', limit: 0, balance: 'error' }]));
  });
  
  it('should add the name, limit and error as balance when the card number does not qualify luhn-10 check', function () {
		let result = [];
		result = add({ name: 'Ron', card: '4111111111111110', limit: 1000, balance: 0 }, []);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Ron', limit: 1000, balance: 'error' }]));
  });

  it('should add the name, limit and error as balance when the card number does not qualify luhn-10 check and/or limit is less than equal to 0', function () {
		let result = [];
		result = add({ name: 'Ron', card: '4111111111111110', limit: 0, balance: 0 }, []);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Ron', limit: 0, balance: 'error' }]));
  });
});
