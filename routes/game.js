const express = require('express');
const router = express.Router();

let packageVersion = require('./../helpers/package-version').version();

/* GET game page. */
router.get('/', function (req, res, next) {
    res.render('game', {
        version: packageVersion
    });
});

module.exports = router;
