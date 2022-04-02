const { constants } = require("buffer");
const { string } = require("yargs");

const sayHello = (abc) => {
return "Hello, " + (abc) + "!";
};

const uppercase = (string) => {
return string.toUpperCase();
};

const lowercase = (string) => {
return string.toLowerCase();
};

function countCharacters (string) {
return string.length;
};

function firstCharacter (string) {
return string.charAt(0);
};

function firstCharacters (string, n) {
return string.substring(0, 4);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
