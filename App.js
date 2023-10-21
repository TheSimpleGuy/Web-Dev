const fs = require('fs/promises');

async function WriteToFile(to , content) {
  try {
    await fs.writeFile(to, content);
  } catch (err) {
    console.log(err);
  }
}