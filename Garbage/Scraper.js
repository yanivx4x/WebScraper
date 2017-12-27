const jsdom = require("jsdom");
let _ = require('underscore');
const {JSDOM} = jsdom;

function GetPropertyListFromUri(uri,prop) {
    let options;
    options = {};
    JSDOM.fromURL(uri, options).then(dom => {
        const document = dom.window.document;
        const elemList = document.querySelectorAll("*");
        let colorList = _.chain(elemList)
            .map(function (elem) {
                let style = dom.window.getComputedStyle(elem);
                return style.getPropertyValue(prop);
            }).filter(function (color) {
                return (color.toString() !== "");
            }).uniq().toArray();
        colorList = colorList._wrapped;

        for (var i = 0; i < colorList.length; i++) {
            console.log(colorList[i].toString());

        }
        return colorList;
    });
}


GetPropertyListFromUri('http://ec2-18-217-234-250.us-east-2.compute.amazonaws.com:3000/','background-color');
