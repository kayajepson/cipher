var sentence = prompt("Enter a sentence:");
console.log(sentence);

var capital1 = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(-1).toUpperCase();
};

var out = capital1(sentence);


var reverse = function (string) {
  return string.slice(-1) + string.charAt(0);
};

console.log(reverse(out));
//var two = capital2(sentence);
//console.log(one.concat(two));
//var attach = function (placeholder1 , placeholder2) {
//  console.log(placeholder1 + placeholder2);
//};

//attach(capital1, capital2);

//firstChar(sentence);
//lastChar(sentence);

// // var catName = prompt("what is your cat's name? ");
// // //
// // // var cat = function(placeholder) {
// // //   alert(placeholder);
// // // };
// // //
// // // cat(catName);
// //
// // function alertName(catName) {alert(catName)};
//
// alertName(catName);
