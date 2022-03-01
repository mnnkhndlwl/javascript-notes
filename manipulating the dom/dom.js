// Get current web page info
document.write("Current URL : ", window.location.href, "<br />");
document.write("Current Host : ", window.location.hostname, "<br />");
document.write("Current Path : ", window.location.pathname, "<br />");
 
// Change site on button click
document.getElementById('goToGoogle').onclick = function(event) {
  window.location.href = "http://google.com";
  // OR
  // window.location.assign("http://google.com");
}
 
// Go forward a page on click
document.getElementById('forwardPage').onclick = function(event) {
  history.forward();
}

// The history object contains the URLs visited by the user (in the browser window).

// The history object is a property of the window object.

// The history object is accessed with:

// window.history or just history

// Go back a page on click
document.getElementById('forwardPage').onclick = function(event) {
    history.back();
  }
   
  // Use history.go(-2) or history.go(2) to jump multiple pages
   
  // Reload page on button click
  document.getElementById('reload').onclick = function(event) {
    window.location.reload(true);  //The location object contains information about the current URL.
  }

  // You can get all ps and then target them like an array
let pElements = document.getElementsByTagName('p');
pElements[0].style.backgroundColor = "#EFDECD";
 
// Target the html
document.childNodes[0].style.backgroundColor = "#FAEBD7";
 
