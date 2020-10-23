#!/usr/bin/env node
var file = require('./src/fileProcessing');
const data = file.data;
const cardProcessing = require('./src/creditCardProcessor');

let result = cardProcessing.creditCardProcessor(data);

console.log(result)
