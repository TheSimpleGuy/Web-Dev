const fs = require('fs/promises');
const Header = require('./Specialized/WebsiteHeader/Header.js');

const test = 1;

async function WriteToFile(to , content) {
  try {
    await fs.writeFile(to, content);
  } catch (err) {
    console.log(err);
  }
}

function print(){
    console.log(Header);
    console.log(test);
}
print();
console.log("\n");

module.exports.Header;