var express = require("express");
var router = express.Router();
var request = require("request");


/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express"});
});

router.get("/listings", function(req, res, next) {
  var baseUrl = "https://ibl.api.bbci.co.uk/ibl/v1/atoz/";
  var letter = "a";
  var page = "1";
  var bbcUrl = baseUrl + letter + "/programmes?page=" + page;

  request(bbcUrl, function (error, response, body) {
    var programmesList = JSON.parse(body).atoz_programmes.elements;
    var programmes = [];
    programmesList.map(function(programme) {
      programmes.push({ "title" : programme.title});
    });
    res.send(programmes);
  });
});

module.exports = router;
