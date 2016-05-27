describe("has listings from the bbc on the page", function() {
  it("should list the first 20 results for 'a' on page load", function() {
    browser.get("/");

    var programmes = element.all(by.repeater("programme in ctrl.programmes"));
    expect(programmes.count()).toEqual(20);
    expect(programmes.get(0).getText()).toContain("Abadas");
    expect(programmes.get(0).getText()).toContain("Pop-up book adventures with the curious Abadas");
  });

  it("should get programmes of 'b' when clicking 'b'", function() {
    browser.get("/");
    $("#letter-b").click();
    var programmes = element.all(by.repeater("programme in ctrl.programmes"));
    expect(programmes.count()).toEqual(20);
    expect(programmes.get(0).getText()).toContain("Babi Del");
    expect(programmes.get(0).getText()).toContain("Cyfres yn dilyn naw mam sydd wedi gadael i'r camerâu eu ffilmio wrth iddynt ddod â bywy...");
  });

  it("should have ability to paginate if the letter has more than 20 results", function() {
    browser.get("/");
    var pages = element.all(by.repeater("page in ctrl.pages"));
    expect(pages.count()).toEqual(4);
  });

  it("should have the image of each programme", function() {
    browser.get("/");
    var image = element(by.id("thumbnail"));
    expect(image.isPresent()).toBeTruthy();
  });

  it("should have the image of each programme", function() {
    browser.get("/");
    $("#letter-x").click();
    var empty = element(by.id("no-results"));
    expect(empty.getText()).toEqual("There are no 'X' programmes.");
  });

});
