let activity = []; //['name',limit, balance]
let result = [];

exports.creditCardProcessor = function creditCardProcessor(data) {
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
};

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

function luhn10check(cardNumber) {
	let nCheck = 0;
	let bEven = false;
	for (let n = cardNumber.length - 1; n >= 0; n--) {
		let cDigit = cardNumber[n];
		let nDigit = parseInt(cDigit, 10);
		if (bEven && (nDigit *= 2) > 9) {
			nDigit -= 9;
		}
		nCheck += nDigit;
		bEven = !bEven;
	}
	return nCheck % 10 === 0;
}

function sortByKey(hash) {
	Object.keys(hash).sort();
}
