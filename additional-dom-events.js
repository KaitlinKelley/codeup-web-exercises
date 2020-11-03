// When a cursor hovers over a paragraph, change the text color, font-family, and make larger
//
// --target the node
// --add event listener for mouseover event to target
//--in listener change styling for paragraph


var paragraph = document.getElementsbyTagName("p")[0];

paragraph.addEventListener("mouseover", function(){
    paragraph.style.color = "red";
    paragraph.style.fontFamily = "Arial";
    paragraph.style.fontSize = "4em";
})

//when double clicking the restore text button, make the paragraph font size 1em

var restoreBtn = document.getElementById("shrink-btn");

restoreBtn.addEventListener("dblclick", function(){
    paragraph.style.fontSize = "1em";
})