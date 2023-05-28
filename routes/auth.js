var express = require('express');
var router = express.Router();

let packageVersion = require('./../helpers/package-version').version();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('auth', {
        version: packageVersion
    });
});

module.exports = router;