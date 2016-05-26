angular
  .module("listings")
  .service("listingsService",["$http", function($http) {
    var self = this;

    self.getListings = function() {
      return $http.get("/listings").then(function(response) {
        return response.data;
      });
    };

  }]);
