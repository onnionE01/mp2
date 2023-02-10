// Get the modal
var tray= document.getElementById("myTrayModal");

// Get the button that opens the modal
var btn = document.getElementById("myTrayBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeTray")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  tray.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  tray.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    tray.style.display = "none";
  }
}