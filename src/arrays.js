const { arrayTypeAnnotation } = require("@babel/types");
const { string, number, array } = require("yargs");

const getNthElement = (index, array) => {
  return array [index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 == 0);
};

function removeNthElement2(index, array) {
  return array.filter(index, 1);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiouAEIOUß]/i.test(str));
};

const removeSpaces = string => { 
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
