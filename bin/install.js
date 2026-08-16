#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const skillName = "india-startup-validator";
const repoRoot = path.resolve(__dirname, "..");
const source = path.join(repoRoot, "skills", skillName);

function usage() {
  console.log(`Install ${skillName} for Kilo.

Usage:
  npx india-startup-validator-skill [options]

Options:
  --project         Install into the current project's .kilo/skills directory (default)
  --global          Install into ~/.config/kilo/skills
  --dest <path>     Install into a custom skills directory
  --force           Replace an existing installed copy
  --help            Show this help message

Examples:
  npx india-startup-validator-skill
  npx india-startup-validator-skill --global
  npx india-startup-validator-skill --dest .kilo/skills --force
`);
}

function parseArgs(argv) {
  const options = {
    mode: "project",
    dest: null,
    force: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--project") {
      options.mode = "project";
      options.dest = null;
    } else if (arg === "--global") {
      options.mode = "global";
      options.dest = null;
    } else if (arg === "--dest") {
      const value = argv[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error("--dest requires a path");
      }
      options.dest = value;
      index += 1;
    } else if (arg === "--force") {
      options.force = true;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return options;
}

function destinationParent(options) {
  if (options.dest) {
    return path.resolve(process.cwd(), options.dest);
  }

  if (options.mode === "global") {
    return path.join(os.homedir(), ".config", "kilo", "skills");
  }

  return path.join(process.cwd(), ".kilo", "skills");
}

function copySkill(options) {
  if (!fs.existsSync(source)) {
    throw new Error(`Skill source not found: ${source}`);
  }

  const parent = destinationParent(options);
  const target = path.join(parent, skillName);

  if (fs.existsSync(target)) {
    if (!options.force) {
      throw new Error(`${target} already exists. Re-run with --force to replace it.`);
    }
    fs.rmSync(target, { recursive: true, force: true });
  }

  fs.mkdirSync(parent, { recursive: true });
  fs.cpSync(source, target, { recursive: true });

  console.log(`Installed ${skillName} to ${target}`);
  console.log("Restart Kilo or start a new Kilo session if the skill does not appear immediately.");
}

try {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    usage();
    process.exit(0);
  }
  copySkill(options);
} catch (error) {
  console.error(`Error: ${error.message}`);
  console.error("Run with --help for usage.");
  process.exit(1);
}
