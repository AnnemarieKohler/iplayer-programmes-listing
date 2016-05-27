angular
  .module("listings")
  .controller("listingsController",["listingsService",
    function(listingsService) {

      var self = this;
      self.programmes = [];
      self.pages = [];

      listingsService.getListings("a", "1").then(function(response) {
        self.programmes = response.programmes;
        var numberOfProgrammes = response.count;
        _getPagesArray("a", numberOfProgrammes);
      });

      self.showProgrammes = function(letter, page) {
        listingsService.getListings(letter, page).then(function(response) {
          self.pages = [];
          self.programmes = response.programmes;
          var numberOfProgrammes = response.count;
          _getPagesArray(letter, numberOfProgrammes);
        });
      };

      function _getPagesArray(letter, numberOfProgrammes){
        var numberOfPages = Math.ceil(numberOfProgrammes / 20);
        for(var i = 1; i < (numberOfPages + 1); i++) {
          self.pages.push({ character: letter, number: i.toString() });
        }
      }



    }]);
