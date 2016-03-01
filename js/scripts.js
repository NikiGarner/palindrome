//bdd
var palindromeTester = function(cheatingString, reversedString){
  if(cheatingString === reversedString){
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

  var cheatingString = inputWordArray.toString("");


  var cloneWordArray = inputWordArray.slice();
  var reversedWordArray = cloneWordArray.reverse();
  var reversedString = reversedWordArray.toString();

  palindromeTester(cheatingString, reversedString);


  event.preventDefault();

});
