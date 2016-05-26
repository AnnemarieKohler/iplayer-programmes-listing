angular
  .module("listings")
  .controller("listingsController",["listingsService",
    function(listingsService) {

      var self = this;
      self.programmes = [];

      listingsService.getListings().then(function(response) {
        self.programmes = response;
      });

    }]);
