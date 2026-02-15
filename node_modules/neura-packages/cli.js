#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// 🔁 Recursive Copy Function (Safe - No Overwrite)
function copyFolderSync(source, target) {
  if (!fs.existsSync(source)) {
    console.log("Source component not found in package...");
      console.log("If you have just added this component, please wait a few seconds and try again.");
    process.exit(1);
  }

  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const srcFile = path.join(source, file);
    const destFile = path.join(target, file);

    if (fs.lstatSync(srcFile).isDirectory()) {
      copyFolderSync(srcFile, destFile);
    } else {
      if (!fs.existsSync(destFile)) {
        fs.copyFileSync(srcFile, destFile);
      }
    }
  });
}

// 🔍 Detect Project Structure Automatically
function detectProjectPath() {
  const projectRoot = process.cwd();

  if (fs.existsSync(path.join(projectRoot, "src", "app"))) {
    return path.join(projectRoot, "src", "app");
  }

  if (fs.existsSync(path.join(projectRoot, "app"))) {
    return path.join(projectRoot, "app");
  }

  if (fs.existsSync(path.join(projectRoot, "src"))) {
    return path.join(projectRoot, "src");
  }

  return null;
}

// 🚀 CLI Commands
const command = process.argv[2];
const component = process.argv[3];

const basePath = detectProjectPath();

if (!basePath) {
  console.log("❌ No compatible React or Next.js structure found.");
  process.exit(1);
}

// 🟢 INIT → Copy Full UI Folder
if (command === "init") {
  const templatePath = path.join(__dirname, "UI");
  const targetPath = path.join(basePath, "UI");

  copyFolderSync(templatePath, targetPath);

  console.log(`✅ Full UI library copied into ${targetPath}`);
}

// 🔵 ADD → Copy Single Component
else if (command === "add" && component) {
  const templatePath = path.join(__dirname, "UI", component);
  const targetPath = path.join(basePath, "UI", component);

  copyFolderSync(templatePath, targetPath);

  console.log(`✅ ${component} component added to ${targetPath}`);
}

// ❓ Help
else {
  console.log("\nUsage:");
  console.log("  npx neura init        → Copy full UI library");
  console.log("  npx neura add button  → Add specific component\n");
}
