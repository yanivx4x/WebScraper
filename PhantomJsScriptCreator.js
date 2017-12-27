module.exports = function (uri,attr) {

    return "var system = require('system');\n" +
        "\n" +
        "\n" +
        "var page = require('webpage').create();\n" +
        "page.settings.userAgent = 'SpecialAgent';\n" +
        "page.open("+`'${uri}'`+", function (status) {\n" +
        "    if (status !== 'success') {\n" +
        "        console.log('Unable to access network');\n" +
        "    } else {\n" +
        "        var ua = page.evaluate(function () {\n" +
        "            var elemList = document.querySelectorAll('*');\n" +
        "            var str = '';\n" +
        "            for (var i = 0; i < elemList.length; i++) {\n" +
        "                var obj = elemList[i];\n" +
        "                var style = window.getComputedStyle(obj);\n" +
        "                str += style.backgroundColor + '###';\n" +
        "            }\n" +
        "            return str;\n" +
        "        });\n" +
        "        system.stdout.write(ua);\n" +
        "\n" +
        "    }\n" +
        "    phantom.exit();\n" +
        "});"
};