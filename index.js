#!/usr/bin/env node
var file = require('./src/fileProcessing');
const data = file.data;
const { creditCardProcessor } = require('./src/creditCardProcessor');

let result = creditCardProcessor(data);

console.log(result);
