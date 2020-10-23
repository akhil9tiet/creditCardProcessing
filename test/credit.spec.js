var expect = require('chai').expect;
const { credit } = require('../src/credit');

describe('credit function tests', function () {
	it('should reduce credit from the balance ', function () {
		let result = [];
		result = credit({ name: 'Tom', credit: 200 }, [{ name: 'Tom', limit: 1000, balance: 500 }]);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Tom', limit: 1000, balance: 300 }]));
	});

	it('should reduce credit from the balance, even if the balance becomes negative ', function () {
		let result = [];
		result = credit({ name: 'Tom', credit: 2000 }, [{ name: 'Tom', limit: 1000, balance: 500 }]);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Tom', limit: 1000, balance: -1500 }]));
	});

	it('should reduce credit from the balance, even if the balance becomes 0 ', function () {
		let result = [];
		result = credit({ name: 'Tom', credit: 500 }, [{ name: 'Tom', limit: 1000, balance: 500 }]);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Tom', limit: 1000, balance: 0 }]));
  });
  
  it('should not reduce credit from the balance, if the person is not in the ledger ', function () {
		let result = [];
		result = credit({ name: 'Tom', credit: 500 }, [{ name: 'Sally', limit: 1000, balance: 500 }]);
		expect(JSON.stringify(result)).to.equal(JSON.stringify([{ name: 'Sally', limit: 1000, balance: 500 }]));
  });
});
