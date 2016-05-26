describe("listingsController", function() {
  beforeEach(module("listings"));

  var ctrl, listingsService;

  beforeEach(inject(function($controller, _listingsService_) {
    ctrl = $controller("listingsController");
    listingsService = _listingsService_;
  }));

  it("has an array of programmes", function() {
    expect(ctrl.programmes).toEqual([]);
  });

  describe("#showProgrammes", function() {
    it("calls the listingsService.getListings with specific letter", function(){
      var revolvingPromise = new Promise(function(resolve, reject) {
        resolve({status: 200});
      });
      spyOn(listingsService, "getListings").and.returnValue(revolvingPromise);
      ctrl.showProgrammes("b");
      expect(listingsService.getListings).toHaveBeenCalledWith("b");
    });
  });

});
