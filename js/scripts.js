var sentence = prompt("Enter a sentence:");
console.log(sentence);

var capital1 = function (string) {
  console.log(string.charAt(0).toUpperCase() + string.slice(-1).toUpperCase());
};


capital1(sentence);
//var two = capital2(sentence);
//console.log(one.concat(two));
//var attach = function (placeholder1 , placeholder2) {
//  console.log(placeholder1 + placeholder2);
//};

//attach(capital1, capital2);

//firstChar(sentence);
//lastChar(sentence);
