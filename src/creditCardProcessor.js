const { add } = require('./add');
const { charge } = require('./charge');
const { credit } = require('./credit');

let result = [];

function creditCardProcessor(data) {
	let ledger = []; //[name,card,limit, balance]
	data.map((commands, i) => {
		let command = commands.split(' ');
		switch (command[0]) {
			case 'Add':
				add({ name: command[1], card: command[2], limit: Number(command[3].slice(1)), balance: 0 }, ledger);
				break;
			case 'Charge':
				charge({ name: command[1], charge: Number(command[2].slice(1)) }, ledger);
				break;
			case 'Credit':
				credit({ name: command[1], credit: Number(command[2].slice(1)) }, ledger);
				break;
			default:
				break;
		}
	});

	result = ledger.reduce(function (record, obj) {
		if (obj.balance === 'error') {
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

module.exports.creditCardProcessor = creditCardProcessor;
