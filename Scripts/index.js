//Task 1
function isString(input) {
  return typeof input === "string";
}

console.log(isString("abc"));
console.log(isString(190));

//Task 2
function isString(input) {
  return typeof input === "string";
}

console.log(isString("abc"));
console.log(isString(190));

function isBlankString(input) {
  return input.trim() === "";
}

// Testing the function
console.log(isBlankString(""));
console.log(isBlankString(" "));
console.log(isBlankString("fjfjf"));

//Task 3
function capitalizeFirst(input) {
  if (input.length === 0) return "";
  return input.charAt(0).toUpperCase() + input.slice(1);
}

// Testing the function
console.log(capitalizeFirst("abcdef"));

//Task 4
function abbr(fullName) {
  let nameParts = fullName.split(" ");

  let abbreviatedLastName =
    nameParts[nameParts.length - 1].charAt(0).toUpperCase() + ".";

  let abbreviatedName = nameParts[0] + " " + abbreviatedLastName;

  return abbreviatedName;
}

console.log(abbr("Ryan Curtis"));

//Task 5
function truncate(sentence, length) {
  if (sentence.length <= length) {
    return sentence;
  }

  return sentence.substring(0, length) + "...";
}

console.log(truncate("I am a long sentence", 5));

//Task 6
const str = "The practitioners grappled on the road side!";
const startIndex = str.indexOf("g");

const result = str.slice(startIndex);

console.log(result);
