//on clicking button our fire function will be called 
function fire(){
    document.getElementById('demo').innerHTML=Date() //it would set the content of element with id demo to date of that particular day
}

function fire2(){
    document.getElementById('demo').style.color = 'blue';
}

function fire3(){ //user will write text in our input box this function will be called
    var data = document.getElementById('in').value;
    alert('user entered : ' + data);
}



// Here is a list of some common HTML events:

// Event	                                    Description

// onchange	                         An HTML element has been changed
// onclick	                         The user clicks an HTML element
// onmouseover	                     The user moves the mouse over an HTML element
// onmouseout	                     The user moves the mouse away from an HTML element
// onkeydown	                     The user pushes a keyboard key
// onload	                         The browser has finished loading the page