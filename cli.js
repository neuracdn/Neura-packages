#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const command = process.argv[2];

if (command === "init") {
  const targetDir = path.join(process.cwd(), "UI");

  // Create UI folder
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  // Create index.js inside UI
  const filePath = path.join(targetDir, "index.js");

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(
      filePath,
      `export const hello = () => "Neura UI Working 🚀";`
    );
    console.log("✅ UI folder and index.js created!");
  } else {
    console.log("⚠ index.js already exists.");
  }

} else {
  console.log("Usage: npx neura init");
}
