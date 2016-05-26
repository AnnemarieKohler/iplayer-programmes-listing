var express = require("express");
var router = express.Router();
var request = require("request");


/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express"});
});

var saveLetter;

router.param("letter", function(req, res, next, letter) {
  saveLetter = letter;
  next();
});

router.get("/listings/:letter", function(req, res, next) {
  var baseUrl = "https://ibl.api.bbci.co.uk/ibl/v1/atoz/";
  var page = "1";
  var bbcUrl = baseUrl + saveLetter + "/programmes?page=" + page;

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
