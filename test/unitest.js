// var assert = require('chai').assert;
var expect = require('chai').expect;
const cardProcessing = require('../src/creditCardProcessor');
let result = [];
describe('end to end test', function () {
	it('result should show correct name and balance for complex manipulations on single user', function () {
		result = cardProcessing.creditCardProcessor([
			'Add Tom 4111111111111111 $1000',
			'Charge Tom $500',
			'Charge Tom $400',
			'Credit Tom $800',
			'Charge Tom $300',
		]);

		expect(result).to.equal(JSON.stringify({ Tom: '$400' }));
	});

	result = [];

	it('result should shold show correct balance, that is less than the limit for a single user', function () {
		result = cardProcessing.creditCardProcessor([
			'Add Tom 4111111111111111 $1000',
			'Charge Tom $500',
			'Charge Tom $400',
			'Credit Tom $800',
			'Charge Tom $300',
			'Charge Tom $400',
			'Charge Tom $900',
		]);

		expect(result).to.equal(JSON.stringify({ Tom: '$800' }));
	});

	result = [];

	it('result should shold show correct balance, that is negative balannce for a single user', function () {
		result = cardProcessing.creditCardProcessor([
			'Add Tom 4111111111111111 $1000',
			'Charge Tom $500',
			'Charge Tom $400',
			'Credit Tom $800',
			'Charge Tom $300',
			'Charge Tom $400',
			'Credit Tom $900',
		]);

		expect(result).to.equal(JSON.stringify({ Tom: '$-100' }));
	});

	result = [];

	it('result should be in lexicographical order, when there are multipe users', function () {
		result = cardProcessing.creditCardProcessor([
			'Add F 4111111111111111 $100',
			'Add E 6011089621777231 $499',
			'Add D 36387598165131 $900',
			'Add C 4917776523231826 $200',
			'Add B 6375739415369120 $399',
			'Add A 5594826061176748 $600',
		]);

		expect(result).to.equal(
			JSON.stringify({ A: 'error', B: 'error', C: 'error', D: 'error', E: 'error', F: 'error' })
		);
	});

	result = [];

	it('should return 3 accounts lexicographically with balance ', function () {
		result = cardProcessing.creditCardProcessor([
			'Add Tom 4111111111111111 $1000',
			'Add Lisa 5454545454545454 $3000',
			'Add Quincy 1234567890123456 $2000',
			'Charge Tom $500',
			'Charge Tom $800',
			'Charge Lisa $7',
			'Credit Lisa $100',
			'Credit Quincy $200',
		]);

		expect(result).to.equal(JSON.stringify({ Lisa: '$-93', Quincy: '$error', Tom: '$500' }));
	});
});
