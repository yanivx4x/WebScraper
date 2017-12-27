let phantomService = require('../../PhantomScriptService');

var indexController = function () {

    function getIndex(req,res) {
       res.render('index',{colors:[]});
    }

    function postIndex(req,res) {
        let uri = req.body.url;
        phantomService.GetUriColors(uri, function (err, colors) {
            res.render('index',{colors:colors});
        });
    }

    // phantomService.GetUriColors('http://simplesamplesite.com',function (err,colors) {
    //     console.log(colors);
    // });

    return {
        getIndex:getIndex,
        postIndex:postIndex
    };
};

module.exports = indexController;