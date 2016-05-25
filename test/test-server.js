var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../app/app");
var should = chai.should();

chai.use(chaiHttp);


describe("Index page", function() {
  it("Should load the index '/' page", function() {
    chai.request(server)
    .get("/")
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });

  it("Should load 'listings' page", function() {
    chai.request(server)
    .get("/listings")
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });
});
