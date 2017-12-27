var express = require('express');
var indexRouter = express.Router();

var router = function () {
    let controller = require('../controllers/indexController')()

    indexRouter.route('/')
        .get(controller.getIndex)
        .post(controller.postIndex);

    return indexRouter;
};


module.exports = router;