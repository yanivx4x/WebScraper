var creator = require('./PhantomJsScriptCreator');
var shell = require('shelljs');
var fs = require('fs');
var _ = require('underscore');

function CreateScriptFile(uri) {
    let script = creator(uri);
    fs.writeFileSync(__dirname + '/temp.js', script, 'utf8');
}

function ExecuteShell(cb) {
    shell.cd(__dirname);
    var phantomProc = shell.exec('phantomjs temp.js', {async: true});
    let str = '';
    phantomProc.stdout.on('data', function (data) {
        str += data;
    });


    phantomProc.stdout.on('end', function (data) {
        let arr = str.split('###');
        let colorList = _.chain(arr).uniq().toArray();
        colorList = colorList._wrapped;
        cb(null, colorList);
    });
}

function GetUriColors(uri, cb) {

    CreateScriptFile(uri);
    ExecuteShell(function (err, colorList) {
        if (!err) cb(null, colorList);
    })
}

module.exports.GetUriColors = GetUriColors;
