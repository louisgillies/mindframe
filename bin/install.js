#!/usr/bin/env node

/**
 * Mindframe Skills Installer
 *
 * Symlinks skill SKILL.md files into ~/.claude/skills/<name>/
 * so Claude Code discovers them automatically.
 *
 * Usage:
 *   node bin/install.js install    — create symlinks
 *   node bin/install.js uninstall  — remove symlinks
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

const action = process.argv[2];

if (!action || !["install", "uninstall"].includes(action)) {
  console.error("Usage: node bin/install.js <install|uninstall>");
  process.exit(1);
}

// Resolve paths
const packageRoot = path.resolve(__dirname, "..");
const skillsSource = path.join(packageRoot, "skills");
const claudeSkillsDir = path.join(os.homedir(), ".claude", "skills");

/**
 * Discover all skills: directories under skills/ that contain a SKILL.md
 */
function discoverSkills() {
  if (!fs.existsSync(skillsSource)) {
    console.warn("No skills/ directory found in package. Nothing to do.");
    return [];
  }

  const entries = fs.readdirSync(skillsSource, { withFileTypes: true });
  const skills = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const skillFile = path.join(skillsSource, entry.name, "SKILL.md");
    if (fs.existsSync(skillFile)) {
      skills.push({ name: entry.name, source: skillFile });
    }
  }

  return skills;
}

/**
 * Install: create symlinks from ~/.claude/skills/<name>/SKILL.md -> source
 */
function install() {
  const skills = discoverSkills();

  if (skills.length === 0) {
    console.log("mindframe: No skills found to install.");
    return;
  }

  console.log(`mindframe: Installing ${skills.length} skill(s)...\n`);

  for (const skill of skills) {
    const targetDir = path.join(claudeSkillsDir, skill.name);
    const targetFile = path.join(targetDir, "SKILL.md");

    // Ensure target directory exists
    fs.mkdirSync(targetDir, { recursive: true });

    // Check if something already exists at the target path
    if (fs.existsSync(targetFile) || isSymlinkBroken(targetFile)) {
      const stat = safeLstat(targetFile);

      if (stat && stat.isSymbolicLink()) {
        // Symlink exists — update it
        const currentTarget = fs.readlinkSync(targetFile);
        if (currentTarget === skill.source) {
          console.log(`  [skip]    ${skill.name} — symlink already up to date`);
          continue;
        }
        fs.unlinkSync(targetFile);
        console.log(`  [update]  ${skill.name} — updating existing symlink`);
      } else if (stat) {
        // Regular file or directory exists — don't overwrite
        console.warn(
          `  [warn]    ${skill.name} — ${targetFile} exists and is not a symlink. Skipping to avoid data loss.`
        );
        continue;
      } else {
        // Broken symlink — remove and recreate
        fs.unlinkSync(targetFile);
      }
    }

    fs.symlinkSync(skill.source, targetFile);
    console.log(`  [ok]      ${skill.name} — symlinked`);
  }

  console.log("\nmindframe: Install complete.");
}

/**
 * Uninstall: remove symlinks and clean up empty directories
 */
function uninstall() {
  const skills = discoverSkills();

  if (skills.length === 0) {
    console.log("mindframe: No skills found to uninstall.");
    return;
  }

  console.log(`mindframe: Uninstalling ${skills.length} skill(s)...\n`);

  for (const skill of skills) {
    const targetDir = path.join(claudeSkillsDir, skill.name);
    const targetFile = path.join(targetDir, "SKILL.md");

    const stat = safeLstat(targetFile);

    if (!stat) {
      console.log(`  [skip]    ${skill.name} — not installed`);
      continue;
    }

    if (!stat.isSymbolicLink()) {
      console.warn(
        `  [warn]    ${skill.name} — ${targetFile} is not a symlink. Skipping to avoid data loss.`
      );
      continue;
    }

    // Remove the symlink
    fs.unlinkSync(targetFile);
    console.log(`  [ok]      ${skill.name} — symlink removed`);

    // Remove the directory if it's now empty
    try {
      const remaining = fs.readdirSync(targetDir);
      if (remaining.length === 0) {
        fs.rmdirSync(targetDir);
        console.log(`  [ok]      ${skill.name} — empty directory removed`);
      }
    } catch (_) {
      // Directory may already be gone; that's fine
    }
  }

  console.log("\nmindframe: Uninstall complete.");
}

/**
 * Safely lstat a path, returning null if it doesn't exist
 */
function safeLstat(filePath) {
  try {
    return fs.lstatSync(filePath);
  } catch (err) {
    if (err.code === "ENOENT") return null;
    throw err;
  }
}

/**
 * Check if a path is a broken symlink
 */
function isSymlinkBroken(filePath) {
  try {
    fs.lstatSync(filePath); // succeeds for broken symlinks
    fs.statSync(filePath); // fails for broken symlinks
    return false;
  } catch (err) {
    if (err.code === "ENOENT") {
      // lstat succeeded but stat failed — broken symlink
      try {
        fs.lstatSync(filePath);
        return true;
      } catch (_) {
        return false;
      }
    }
    return false;
  }
}

// Run
if (action === "install") {
  install();
} else {
  uninstall();
}
