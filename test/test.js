const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Hello Dip!", (done) => {
        request(app).get("/").expect("Hello Dip!", done);
    })
});