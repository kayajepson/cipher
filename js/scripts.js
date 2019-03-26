var sentence = prompt("Enter a sentence:");
console.log(sentence);

// var capitalize = function (string) {
//   return string.charAt(0).toUpperCase() + string.slice(-1).toUpperCase();
// };

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(-1).toUpperCase();
};

function reverse(string) {
  return string.slice(-1) + string.charAt(0);
};

function final(sentence2) {
  var out = capitalize(sentence2);
  return reverse(out);
}

console.log(final("what"));

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
