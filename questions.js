var languagesArrayCreation = function () {
  var languages = new Array('Html', 'CSS', 'Java', 'PHP');
  return languages;
}

var numbersArrayCreation = function () {
    var numbers = new Array(0, 1, 2, 3, 4, 5);
    return numbers;
}

var ElementReplacement = function (languages) {
  languages[2] = 'Javascript';
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby','Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2,-1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
  var socialMedia = socialMediaInString.split(',');
  return socialMedia;
}

var arrayToString = function (languages) {
  var languagesInString = languages.join(',');
  return languagesInString;
}

var arraySort = function (socialMedia) {
  return socialMedia.sort();
}

var arrayInvert = function (socialMedia){
  return socialMedia.reverse();
}
