var expect = require('chai').expect;
const { luhn10check } = require('../src/luhn10check');
let result;

describe('luhn-10 check test', function () {
	it('should return false if card number length is greater than 19', function () {
		result = luhn10check('411111111111111111111');
		expect(result).to.equal(false);
	});

	it('should return false if card numbers last digit does not pass the luhn algorithmic test', function () {
		result = luhn10check('4111111111111110');
		expect(result).to.equal(false);
	});

	it('should return false if card number has anything other than digit', function () {
		result = luhn10check('411111A111111111');
		expect(result).to.equal(false);
	});

	it('should return true for 4111111111111111 card number as it passes luhn-10 check', function () {
		result = luhn10check('4111111111111111');
		expect(result).to.equal(true);
	});

	it('should return true for 4539305486345957, Visa card number as it passes luhn-10 check', function () {
		result = luhn10check('4539305486345957');
		expect(result).to.equal(true);
	});

	it('should return true for 5344349498260673, MasterCard card number as it passes luhn-10 check', function () {
		result = luhn10check('5344349498260673');
		expect(result).to.equal(true);
	});

	it('should return true for 370537247738118, American Express (AMEX) card number as it passes luhn-10 check', function () {
		result = luhn10check('370537247738118');
		expect(result).to.equal(true);
	});

	it('should return true for 6011519840592839, Discover card number as it passes luhn-10 check', function () {
		result = luhn10check('6011519840592839');
		expect(result).to.equal(true);
	});

	it('should return true for 3539014292555864, JCB card number as it passes luhn-10 check', function () {
		result = luhn10check('3539014292555864');
		expect(result).to.equal(true);
	});

	it('should return true for 5423465854238576, Diners Club - North America  card number as it passes luhn-10 check', function () {
		result = luhn10check('5423465854238576');
		expect(result).to.equal(true);
	});

	it('should return true for 30289699774801, Diners Club - Carte Blanche card number as it passes luhn-10 check', function () {
		result = luhn10check('30289699774801');
		expect(result).to.equal(true);
	});

	it('should return true for 36052627607483, Diners Club - International card number as it passes luhn-10 check', function () {
		result = luhn10check('36052627607483');
		expect(result).to.equal(true);
	});

	it('should return true for 6761003837354042, Maestro card number as it passes luhn-10 check', function () {
		result = luhn10check('6761003837354042');
		expect(result).to.equal(true);
	});

	it('should return true for 4175009411988308, Visa Electron card number as it passes luhn-10 check', function () {
		result = luhn10check('4175009411988308');
		expect(result).to.equal(true);
	});

	it('should return true for 6383590159281942, InstaPayment card number as it passes luhn-10 check', function () {
		result = luhn10check('6383590159281942');
		expect(result).to.equal(true);
	});
});
