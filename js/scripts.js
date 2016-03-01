//bdd
var palindromeTester = function(inputString, reversedString){
  if(inputString === reversedString){
    $("#yes").hide();
    $("#no").hide();
    $("#yes").show();
  } else{
    $("#yes").hide();
    $("#no").hide();
    $("#no").show();
  }
};



//listeners and such
$("form#palindrome").submit(function(event){
  var inputString = $("input#userstring").val();

  var inputWordArray = inputString.split("");


  var cloneWordArray = inputWordArray.slice();
  var reversedWordArray = cloneWordArray.reverse();
  var reversedString = reversedWordArray.join("");

  palindromeTester(inputString, reversedString);


  event.preventDefault();

});
