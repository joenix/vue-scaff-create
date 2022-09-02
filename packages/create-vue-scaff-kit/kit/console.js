// Use Chalk
const chalk = require('chalk');

// Set Map of Console
const map = {
  log: 'gray',
  error: 'red',
  info: 'cyan',
  warn: 'yellow',
  success: 'green',
};

// Set Console
const $console = {};

// Set Properties of Console
for (const key in map) {
  // Set Color
  const color = map[key];

  // Set Property as Color
  $console[key] = content => console.log(chalk[color](content));
}

// Export Console
module.exports = $console;
