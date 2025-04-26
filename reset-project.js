// scripts/reset-project.js
const fs = require('fs');
const path = require('path');

// Paths to reset
const appPath = path.join(__dirname, '../app');
const examplePath = path.join(__dirname, '../app-example');

// Function to delete a directory
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}

// Reset the project
try {
  console.log('Resetting project...');
  deleteFolderRecursive(appPath);
  fs.mkdirSync(appPath);
  console.log('Project reset complete.');
} catch (error) {
  console.error('Error resetting project:', error);
}