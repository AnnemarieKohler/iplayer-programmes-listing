angular
  .module("listings")
  .service("listingsService",["$http", function($http) {
    var self = this;

    self.getListings = function(letter, page) {
      return $http.get("/listings/" + letter + "/" + page).then(function(response) {
        return response.data;
      });
    };



  }]);
