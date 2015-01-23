#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");
var handlebars = require("handlebars");
var program = require("commander");

program
  .version("1.0.0")
  .option("-i, --input <path>", "Input file path")
  .option("-o, --output <path>", "Output file path");

function readYAMLFile(contents, done) {
  var data = yaml.safeLoad(contents);

  var safePath = path.join(__dirname, "template.xml");

  var templateString = fs.readFileSync(safePath, "utf-8");

  var templateFn = handlebars.compile(templateString);

  done(templateFn(data));
}

function convert(filepath, done) {
  fs.readFile(path.resolve(filepath), "utf-8", function (err, contents) {
    if (err) {
      throw err;
    }

    readYAMLFile(contents, done);
  });
}

function comandlineDone(output) {
  if (!program.output) {
    console.log(output);
    return;
  }

  var outputPath = path.resolve(program.output);

  fs.writeFile(outputPath, output);
}

function comandline() {
  if (!program.input) {
    return;
  }
  convert(program.input, comandlineDone);
}

program
  .command("parse")
  .action(comandline);

program.parse(process.argv);

module.exports = function (inputPath, done) {
  convert(inputPath, done);
};
