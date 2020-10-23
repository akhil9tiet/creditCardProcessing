const { luhn10check } = require('./luhn10check');
function add(input, ledger) {
	let isCardValid = luhn10check(input.card);
	if (!isCardValid) {
		ledger.push({ name: input.name, limit: input.limit, balance: 'error' });
	} else {
		ledger.push({ name: input.name, limit: input.limit, balance: 0 });
	}
	return ledger;
}

module.exports.add = add;
