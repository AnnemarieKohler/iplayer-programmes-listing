angular
  .module("listings")
  .service("listingsService",["$http", function($http) {
    var self = this;

    self.getListings = function(letter) {
      return $http.get("/listings/" + letter).then(function(response) {
        return response.data;
      });
    };



  }]);
