var system = require('system');


var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('http://ec2-18-217-234-250.us-east-2.compute.amazonaws.com:3000', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function () {
            var elemList = document.querySelectorAll('*');
            var str = '';
            for (var i = 0; i < elemList.length; i++) {
                var obj = elemList[i];
                var style = window.getComputedStyle(obj);
                str += style.backgroundColor + ' ';
            }
            return str;
        });
        system.stdout.write(ua);

    }
    phantom.exit();
});