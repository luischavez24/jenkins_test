var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { 
    title: 'Express',
    todos: [
      'Build docker file',
      'Execute docker-compose'
    ] 
  });
});

module.exports = router;
