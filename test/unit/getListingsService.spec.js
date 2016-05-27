describe("listingsService", function() {
  beforeEach(module("listings"));

  var listingsService, $httpBackend;

  beforeEach(inject(function(_listingsService_, _$httpBackend_) {
    listingsService = _listingsService_;
    $httpBackend = _$httpBackend_;
  }));

  describe("#getListings", function() {
    it("calls $http", function() {
      var listingAPageOne = {title: "A", page: 1};
      $httpBackend.expectGET("/listings/a/1").respond(listingAPageOne);

      listingsService.getListings("a", 1).then(function(response) {
        expect(response).toEqual(listingAPageOne);
      });
    });
  });
});
