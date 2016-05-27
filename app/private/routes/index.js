var express = require("express");
var router = express.Router();
var request = require("request");


/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "BBC iPlayer Programmes from A-Z"});
});

router.get("/listings/:letter/:page", function(req, res, next) {
  letter = req.params.letter;
  page = req.params.page;
  var baseUrl = "https://ibl.api.bbci.co.uk/ibl/v1/atoz/";
  var bbcUrl = baseUrl + letter + "/programmes?page=" + page;

  request(bbcUrl, function (error, response, body) {
    var data = JSON.parse(body).atoz_programmes;
    var programmesList = data.elements;

    var programmes = programmesList.map(function(programme) {
      var image = programme.images.standard.replace("{recipe}","406x228");

      return {  title : programme.title,
                page: data.page,
                character: data.character,
                image: image,
                synopses: programme.synopses.small};
    });
    var list = {count: data.count, programmes: programmes};
    res.send(list);
  });
});

module.exports = router;
