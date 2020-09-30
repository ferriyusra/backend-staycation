const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");

chai.use(chaiHttp);

describe("API ENDPOINT TESTING", () => {
  // API landing page
  it("GET Landing Page", (done) => {
    chai
      .request(app)
      .get("/api/v1/member/landing-page")
      .end((err, res) => {
        //   testing untuk melihat data semua landing page
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("hero");
        expect(res.body.hero).to.have.all.keys(
          "travelers",
          "treasures",
          "cities"
        );
        // testing untuk melihat data api mostpicked
        expect(res.body).to.have.property("mostPicked");
        expect(res.body.mostPicked).to.have.an("array");
        // testing untuk melihat data api category
        expect(res.body).to.have.property("category");
        expect(res.body.category).to.have.an("array");
        // testing untuk melihat data api testimonial
        expect(res.body).to.have.property("testimonial");
        expect(res.body.testimonial).to.have.an("object");
        done();
      });
  });

  //   API detail page
  it("GET Detail Page", (done) => {
    chai
      .request(app)
      .get("/api/v1/member/detail-page/5e96cbe292b97300fc902223")
      .end((err, res) => {
        // testing untuk melihat data semua data item
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("country");
        expect(res.body).to.have.property("isPopular");
        expect(res.body).to.have.property("unit");
        expect(res.body).to.have.property("sumBooking");
        expect(res.body).to.have.property("imageId");
        expect(res.body.imageId).to.have.an("array");
        expect(res.body).to.have.property("featureId");
        expect(res.body.featureId).to.have.an("array");
        expect(res.body).to.have.property("activityId");
        expect(res.body.activityId).to.have.an("array");
        expect(res.body).to.have.property("_id");
        expect(res.body).to.have.property("title");
        expect(res.body).to.have.property("price");
        expect(res.body).to.have.property("city");
        expect(res.body).to.have.property("description");
        expect(res.body).to.have.property("__v");
        // melihat data bank
        expect(res.body).to.have.property("bank");
        expect(res.body.bank).to.have.an("array");
        // melihat data testimonial
        expect(res.body).to.have.property("testimonial");
        expect(res.body.testimonial).to.have.an("object");
        done();
      });
  });
});
