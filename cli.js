#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const command = process.argv[2];

if (command === "init") {
  const targetDir = path.join(process.cwd(), "UI");

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
    console.log("✅ UI folder created successfully!");
  } else {
    console.log("⚠ UI folder already exists.");
  }
} else {
  console.log("Usage: npx neura init");
}
