#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");
var handlebars = require("handlebars");
var program = require("commander");
var Promise = require('bluebird');

program
  .version("1.0.0")
  .option("-i, --input <path>", "Input file path")
  .option("-o, --output <path>", "Output file path");

function readFilePromise(filepath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filepath, 'utf-8', function (err, contents) {
      if (err) {
        reject(err);
        return;
      }
      resolve(contents);
    });
  });
}

function getTemplate() {
  return readFilePromise(path.join(__dirname, "template.xml"));
}

function convert(filepath, done) {
  readFilePromise(path.resolve(filepath))
    .then(function (contents) {
      var data = yaml.safeLoad(contents);

      return getTemplate()
        .then(function (templateString) {
          return handlebars.compile(templateString)(data);
        });
    })
    .then(function (xml) {
      done(xml);
    })
    .catch(function (err) {
      throw err;
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
