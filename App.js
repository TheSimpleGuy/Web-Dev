const fs = require('fs/promises');

const test = 1;

async function WriteToFile(to , content) {
  try {
    await fs.writeFile(to, content);
  } catch (err) {
    console.log(err);
  }
}

console.log(test);

module.exports = {WriteToFile, test};