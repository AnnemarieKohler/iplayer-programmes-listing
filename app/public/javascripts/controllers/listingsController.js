angular
  .module("listings")
  .controller("listingsController",["listingsService",
    function(listingsService) {

      var self = this;
      self.programmes = [];

      listingsService.getListings("a").then(function(response) {
        self.programmes = response;
      });

      self.showProgrammes = function(letter) {
        listingsService.getListings(letter).then(function(response) {
          self.programmes = response;
        });
      };

    }]);
