const fs = require("fs");
const path = require("path");
const uuidv4 = require("uuid/v4");

const workingDirectory = "./src/data/background-images/";

const loadFiles = () => fs.readdirSync(workingDirectory);
const getUUID = () => uuidv4().replace(/-/g, "");
const getFileName = (...parts) => path.join(workingDirectory, ...parts);

const isValidFilename = filename =>
  (filename.match(/[0-9a-f]{32} - \([^,]*, [^)]*\).jpg/g) || []).length > 0;
const isValidLocation = filename =>
  (filename.match(/[^,]*, [^)]*.jpg/g) || []).length > 0;

let errors = [];

loadFiles().forEach(filename => {
  if (!isValidFilename(filename))
    if (isValidLocation(filename))
      fs.renameSync(
        getFileName(filename),
        getFileName(`${getUUID()} - (${filename.replace(/.jpg/g, ").jpg")}`)
      );
    else
      errors.push(
        `${filename} has an invalid name, please rename to "<city>, <country (in english)>.jpg"`
      );
});

if (errors.length > 0) {
  errors.forEach(error => console.log(error));
  process.exit(1);
}
