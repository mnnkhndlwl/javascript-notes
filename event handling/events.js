//on clicking button our fire function will be called 
function fire(){
    document.getElementById('demo').innerHTML=Date() //it would set the content of element with id demo to date of that particular day
}

function fire2(){
    document.getElementById('demo').style.color = 'blue'; //using .style.property use can style your elements
}

function fire3(){ //user will write text in our input box this function will be called
    var data = document.getElementById('in').value;
    alert('user entered : ' + data);
}

function getChar(event) {
 
    // event.which returns the key or mouse button clicked
    if (event.which == null) {
   
      // Return the char if not a special character
      return String.fromCharCode(event.keyCode); // IE
    } else if (event.which!=0 && event.charCode!=0) {
      return String.fromCharCode(event.which);   // Other Browsers
    } else {
      return null; // Special Key Clicked
    }
  }
   
  document.getElementById('charInput').onkeypress = function(event) { //this function will be called as soon as we press a key
    var char = getChar(event || window.event)
    if (!char) return false; // Special Key Clicked
   
    document.getElementById('keyData').innerHTML = char + " was clicked";
    return true;
  }
   
  // Change text when the input gains focus
  document.getElementById('charInput').onfocus = function(event) {
    document.getElementById('keyData').innerHTML = "Input Gained Focus";
  }
   
  // Change text when the input loses focus
  document.getElementById('charInput').onblur = function(event) {
    document.getElementById('keyData').innerHTML = "Input Lost Focus";
  }
   
  // Change text when text is selected
  document.getElementById('charInput').onselect = function(event) {
    document.getElementById('keyData').innerHTML = "Text Selected";
  }
   
  // Add a listener that triggers a function on browser resize
  window.addEventListener("resize", browserResized);
   
  function browserResized() {
    document.getElementById('keyData').innerHTML = "I've been resized";
  }
   
  // Make image invisible on click
  document.getElementById('logo').onclick = function(event) {
   
    // Change the class for the image
    document.getElementById('logo').className = "hidden";
   
    // Change the input element value
    document.getElementById('mouseInput').value = "Clicked on image with button " + event.button;
  }
   
  // Make image visible on click
  document.getElementById('logoButton').onclick = function(event) {
    document.getElementById('logo').className = "show";  //we are adding the class 
  }
   
  // Change image src on mouseover
  document.getElementById('logo').onmouseover = function(event) {
    document.getElementById('logo').src = "https://images.unsplash.com/photo-1646076929079-46379ead36cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80";
    document.getElementById('mouseInput').value = "Mouse Over image";
  }
   
  // Change image src back on mouseout
  document.getElementById('logo').onmouseout = function(event) {
    document.getElementById('logo').src = "https://images.unsplash.com/photo-1646121575186-fe136178cff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80";
    document.getElementById('mouseInput').value = "Mouse Left image";
  }
   
  // Get mouse x y coordinates
  document.body.onmousemove = function(e) {
      e = e || window.event;
   
      // Get pageX, pageY : Mouse position relative to the html doc
      var pageX = e.pageX;
      var pageY = e.pageY;
      if (pageX === undefined) {
   
          // clientX, clientY : Mouse position relative to the browsers viewport
          // scrollLeft, scrollTop : Pixels an element is scrolled left or
          // from the top
          pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
   
      document.getElementById('mouseX').value = pageX;
      document.getElementById('mouseY').value = pageY;
  };
   
  // Clear all input elements
  document.getElementById('clearInputs').onclick = function(event) {
    var inputElements = document.getElementsByTagName('input'); //returns all elements by tag name
   
    for (var i = 0; i < inputElements.length; i++) { //will go to each input element
    if (inputElements[i].type == "text") {
      inputElements[i].value = "";
    }
  }
  }


// Here is a list of some common HTML events:

// Event	                                    Description

// onchange	                         An HTML element has been changed
// onclick	                         The user clicks an HTML element
// onmouseover	                     The user moves the mouse over an HTML element
// onmouseout	                     The user moves the mouse away from an HTML element
// onkeydown	                     The user pushes a keyboard key
// onload	                         The browser has finished loading the page