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

module.exports.luhn10check = luhn10check;
