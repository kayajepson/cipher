var sentence = prompt("Enter a sentence:");
console.log(sentence);

var capital = function (placeholder) {
  console.log(placeholder.charAt(0).toUpperCase());
  console.log(placeholder.slice(-1).toUpperCase());
};

capital(sentence);
firstChar(sentence);
lastChar(sentence);
