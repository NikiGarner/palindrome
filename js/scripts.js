//bdd
var palindromeTester = function(inputWordArray, reversedWordArray){
  if( inputWordArray === reversedWordArray){
    alert "This is a palindrome!"
  } else{
    alert "This is not a palindrome!"
  }

});


//listeners and such
$("form#palindrome").submit(function(event){
  var inputWord = ("input#inputWord").val();
  var inputWordArray = inputWord.split("");
  var cloneWordArray = inputwordArray.slice();
  var reversedWordArray = cloneWordArray.reverse();

  palindromeTester(inputWordArray, reversedWordArray);

  event.preventDefault();
});
