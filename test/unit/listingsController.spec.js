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

  it("has count of programmes", function() {
    expect(ctrl.pages).toEqual(0);
  });

  describe("#showProgrammes", function() {
    it("calls the listingsService.getListings with specific letter", function(){
      var revolvingPromise = new Promise(function(resolve, reject) {
        resolve({status: 200});
      });
      spyOn(listingsService, "getListings").and.returnValue(revolvingPromise);
      ctrl.showProgrammes("b", "1");
      expect(listingsService.getListings).toHaveBeenCalledWith("b", "1");
    });
  });

});
