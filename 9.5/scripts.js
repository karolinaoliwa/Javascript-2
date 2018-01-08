var buttonText = document.getElementsByClassName("button");
var textLength = buttonText.length;


for ( var i = 0 ; i < textLength ; i++) {
  var text = buttonText[i].innerText;
  alert("Button Text: " + text);
}