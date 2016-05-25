var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/listings", function(req, res, next) {
  request('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1', function (error, response, body) {
    var programmes = [];
    JSON.parse(body).atoz_programmes.elements.map(function(programme) {
      programmes.push({ "title" : programme.title});
    });
    res.send(programmes);
  });
});

module.exports = router;
