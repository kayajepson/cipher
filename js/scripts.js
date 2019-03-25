var sentence = prompt("Enter a sentence:");
console.log(sentence);

var capital = function (placeholder) {
  console.log(placeholder.toUpperCase());
};

var firstChar = function(placeholder2) {
  console.log(placeholder2.charAt(0));
};

var lastChar = function(placeholder3) {
  console.log((placeholder3).slice(-1));
}
capital(sentence);
firstChar(sentence);
lastChar(sentence);
