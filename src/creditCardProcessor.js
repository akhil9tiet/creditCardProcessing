const { luhn10check } = require('./luhn10check');
let activity = []; //['name',limit, balance]
let result = [];

function creditCardProcessor(data) {
	data.map((commands) => {
		let command = commands.split(' ');
		switch (command[0]) {
			case 'Add':
				add({ name: command[1], card: command[2], limit: Number(command[3].slice(1)), balance: 0 });
				break;
			case 'Charge':
				charge({ name: command[1], charge: Number(command[2].slice(1)) });
				break;
			case 'Credit':
				credit({ name: command[1], credit: Number(command[2].slice(1)) });
				break;
			default:
				break;
		}
	});

	result = activity.reduce(function (record, obj) {
		if (!obj.balance) {
			record[obj.name] = 'error';
		} else {
			record[obj.name] = `$${obj.balance}`;
		}
		return record;
	}, {});

	let orderedResult = {};
	Object.keys(result)
		.sort()
		.forEach((key) => (orderedResult[key] = result[key]));
	return JSON.stringify(orderedResult);
}

function add(input) {
	let isCardValid = luhn10check(input.card);
	if (!isCardValid) {
		activity.push({ name: input.name, limit: input.limit, balance: 'error' });
	} else {
		activity.push({ name: input.name, limit: input.limit, balance: 0 });
	}
}

function charge(input) {
	for (let record of activity) {
		if (record.name === input.name && record.balance !== 'error') {
			if (record.balance + input.charge < record.limit) {
				record.balance += input.charge;
			}
		}
	}
}

function credit(input) {
	for (let record of activity) {
		if (record.name === input.name && record.balance !== 'error') {
			record.balance -= input.credit;
		}
	}
}

module.exports.creditCardProcessor = creditCardProcessor;
