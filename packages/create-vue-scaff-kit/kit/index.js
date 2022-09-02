// Use Path
const path = require('path');

// Use Cac for Command
const cac = require('cac');

// Use Prompts
const prompts = require('prompts');

// Set Root
const root = process.cwd();

// Set Resolve
const resolve = path => path.join(root, path);

// Set Map of Console
const console = require('./console');

// Set Map of Console
const download = require('./download');

// Create CLI
const cli = cac('create-vue-scaff');

// Export APIs
module.exports = {
  path,

  cac,
  prompts,

  root,
  resolve,

  console,
  download,
  cli,
};
