describe("has listings from the bbc on the page", function() {
  it("should list the first 20 results for 'a'", function() {
    browser.get("/");

    var programmes = element.all(by.repeater("programme in ctrl.programmes"));
    expect(programmes.count()).toEqual(20);
    expect(programmes.get(0).getText()).toEqual("Abadas");
  });
});
