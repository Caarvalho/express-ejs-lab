var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('math', { title: 'eu quero, te possuir, quero você, todinha pra mim' });
});

module.exports = router;