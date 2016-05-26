describe("listingsController", function() {
  beforeEach(module("listings"));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller("listingsController");
  }));

  it("has an array of programmes", function() {
    expect(ctrl.programmes).toEqual([]);
  });

});
