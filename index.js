#!/usr/bin/env node
var file = require('./src/fileProcessing');
const data = file.data;
const creditCard = require('./src/creditCardProcessor');

let result = creditCard.creditCardProcessor(data);

console.log(result);
