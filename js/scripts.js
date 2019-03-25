var sentence = prompt("Enter a sentence:");
console.log(sentence);

var capital1 = function (placeholder1) {
  console.log(placeholder1.charAt(0).toUpperCase());
  //console.log(placeholder.slice(-1).toUpperCase());
};

var capital2 = function (placeholder2) {
  //console.log(placeholder.charAt(0).toUpperCase());
  console.log(placeholder2.slice(-1).toUpperCase());
};

capital1(sentence);
capital2(sentence);

//var attach = function (placeholder1 , placeholder2) {
//  console.log(placeholder1 + placeholder2);
//};

//attach(capital1, capital2);

//firstChar(sentence);
//lastChar(sentence);
