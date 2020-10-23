function credit(input, ledger) {
	for (let record of ledger) {
		if (record.name === input.name && record.balance !== 'error') {
			record.balance -= input.credit;
		}
	}
	return ledger;
}

module.exports.credit = credit;
