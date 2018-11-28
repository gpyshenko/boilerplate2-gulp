const fs = require('fs');
const path = require('path');
const { domain } = require('../options.json');
const dist = './dist/';

fs.readdir(dist, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (path.extname(file) === ".html") {
            var link = domain + file
            fs.appendFile(`${dist}links.txt`, '\n' + link, (err) => {
                if (err) throw err;
                console.log('Created file with links')
            })
        }
    })
});