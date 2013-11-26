'use strict';

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) throw err;

    fs.writeFile('stringified.js', 'window.stringified = ' + JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
});
