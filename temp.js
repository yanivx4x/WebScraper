var system = require('system');


var page = require('webpage').create();
page.settings.userAgent = 'SpecialAgent';
page.open('a', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function () {
            var elemList = document.querySelectorAll('*');
            var str = '';
            for (var i = 0; i < elemList.length; i++) {
                var obj = elemList[i];
                var style = window.getComputedStyle(obj);
                str += style.backgroundColor + '###';
            }
            return str;
        });
        system.stdout.write(ua);

    }
    phantom.exit();
});