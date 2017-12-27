var shell = require('shelljs');
var fs = require('fs');



shell.cd(__dirname);

var phantomProc = shell.exec('phantomjs pageTry.js',{async:true});
let str ='';
phantomProc.stdout.on('data',function (data) {
    str += data;
});

phantomProc.stdout.on('end',function (data) {
   console.log('@@@@@@@@@@@@@@@@@@@');
   console.log(str);
});





