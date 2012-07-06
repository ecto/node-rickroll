#!/usr/bin/env node
var exec = require('child_process').exec;
var n = process.argv[2];
if (!n) {
  n = 1;
} else if (isNaN(n)) {
  console.log('usage: rickroll n');
  process.exit();
}
for (var i = 0; i < n; i++) {
  exec('open "http://www.youtube.com/watch?v=oHg5SJYRHA0"');
}
