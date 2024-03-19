var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let x= Math.random()*1000;
    y = Math.ceil(x);
  res.send(`ceil of ${x} is ${y}`);
});

module.exports = router;
