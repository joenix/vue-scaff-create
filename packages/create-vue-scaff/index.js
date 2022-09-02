#!/usr/bin/env node

/**
 * Create Scaff
 * ========== ========== ==========
 */

// Use Kits
const {
  cli,
  console,
  prompts,
  download,
  root
} = require("create-vue-scaff-kit");

// Use Choices
const { choices } = require("create-vue-scaff-choices");

// Build Commander
cli

  // Command for Scaffold
  .command("<name>", "install template")

  // Actions as Promise
  .action(async (name, options) => {
    // Get Template by Prompts
    const { template } = await prompts({
      // Type use Select
      type: "select",
      // Props Name
      name: "template",
      // Message Tip
      message: "template choose",
      // Option of Choice
      choices
    });

    // Set Repo by Prompts
    const repo = await prompts({
      // Type use Text
      type: "text",
      // Props Name
      name: "repo",
      // Message Tip
      message: "git repo"
    });

    // Success of Download Repo
    const success = await download(`direct:${template}`, `${root}/${name}`);

    // Endness
    if (success) {
      console.info(`cd ${name}` + `\n` + `yarn install`);
    }
  });

// QA for Cli
cli.help();

// Init of Cli as Parse
cli.parse();
