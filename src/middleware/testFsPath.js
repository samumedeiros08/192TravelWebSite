const fs = require('fs');
const path = require('path');

const indexPath = path.resolve('.','src','views','indextest.ejs')
console.log(indexPath)

const index = fs.readFileSync(indexPath, "utf-8");
console.log(index);
