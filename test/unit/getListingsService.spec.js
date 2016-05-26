describe("listingsService", function() {
  beforeEach(module("listings"));

  var listingsService, $httpBackend;

  beforeEach(inject(function(_listingsService_, _$httpBackend_) {
    listingsService = _listingsService_;
    $httpBackend = _$httpBackend_;
  }));

  describe("getListings", function() {
    it("calls $http", function() {
      var listingForLetterA = {title: "A"};
      $httpBackend.expectGET("/listings").respond(listingForLetterA);

      listingsService.getListings().then(function(response) {
        expect(response).toEqual(listingForLetterA);
      });
    });
  });
});
