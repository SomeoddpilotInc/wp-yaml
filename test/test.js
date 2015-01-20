var assert = require("chai").assert;
var fs = require("fs");
var wpYAML = require("../.");

describe("WP-YAML", function () {
  describe("module", function () {
    it("should convert YAML to XML", function (done) {
      wpYAML("test/test.yaml", function (output) {
        var expected = fs.readFileSync("test/test.xml", "utf-8");

        assert(expected, output);
        done();
      });
    });
  });
});
