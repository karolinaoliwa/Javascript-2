var buttonText = document.getElementsByClassName("button");
 	x = buttonText.length;


for ( var i = 0 ; i < x ; i++) {
  var text = buttonText[i].innerText;
  alert("Button Text: " + text);
}