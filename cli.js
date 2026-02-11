#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Recursive copy function
function copyFolderSync(source, target) {
  if (!fs.existsSync(source)) {
    console.log("❌ UI folder not found inside package.");
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

const command = process.argv[2];

if (command === "init") {
  const projectRoot = process.cwd();
  const srcPath = path.join(projectRoot, "src", "app");

  if (!fs.existsSync(srcPath)) {
    console.log("❌ No src/app folder found. Run inside a Next.js or React project.");
    process.exit(1);
  }

  const templatePath = path.join(__dirname, "UI");
  const targetPath = path.join(srcPath, "UI");

  copyFolderSync(templatePath, targetPath);

  console.log("✅ UI folder copied successfully into src/UI");
} else {
  console.log("Usage:");
  console.log("  npx neura init");
}
