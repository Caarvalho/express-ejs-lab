var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('random', { title: 'Por que não aposta algo comigo?' });
});

module.exports = router;
