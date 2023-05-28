var express = require('express');
var router = express.Router();

let packageVersion = require('./../helpers/package-version').version();

/* GET lobby page. */
router.get('/', function(req, res, next) {
    res.render('lobby', {
        version: packageVersion
    });
});

module.exports = router;
