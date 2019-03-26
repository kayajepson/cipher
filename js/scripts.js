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

function final(str) {
  var out = capitalize(str);
  return str + reverse(out);
}


var jesus = final(sentence);
function fourth(str){
return str.charAt(Math.floor(str.length / 2)) + str;
}

console.log(fourth(jesus));



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
