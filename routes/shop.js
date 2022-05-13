const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));//build this way to automatically work on both windows and linux
});

module.exports = router;