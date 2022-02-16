// ---------- ARRAYS ----------
// An array is a special variable, which can hold more than one value
// Arrays have variable sizes and can contain multiple types in JS
var mirzapur = ["muna bhaiya", "123 guddu", 120.50 , 420];
//here mirzapur is name of our array and muna bhaiya , 123 guddu , 120.50 and 420 are our array elements
// to access any array element arrayname[index number]
document.write("3rd element : ", mirzapur[2], "<br />");

// Add an item
mirzapur[4] = "o chacha"

//The splice() method can be used to add new items to an array
mirzapur.splice(2, 1, "Pittsburgh", "PA");
// Overwrite index 2 and fit everything else after index 2 without
// overwriting (Put 0 for second parameter to not overwrite
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Pittsburgh" , "PA") define the new elements to be added.

for (let index = 0; index < mirzapur.length; index++) {
    document.write("array element ", index + "  : " + mirzapur[index], "<br />");
}

// Delete the 4th index item
mirzapur.splice(4,1);
 
// Convert an array into a string (Also use toString())
document.write("Array : ", mirzapur.toString(), "<br />");
 
// Convert an array into a string with separator
document.write("Array : ", mirzapur.join(", "), "<br />");

// Sort an array (reverse() for reverse sort)
// Works for sorting strings
mirzapur.sort();

document.write("after sorting : " , "<br />");

for (let index = 0; index < mirzapur.length; index++) {
    document.write("array element ", index + "  : " + mirzapur[index], "<br />");
}

// Sort numbers
var numbers = [4,3,9,1,20,43];
 
// Descending sort return y - x
numbers.sort(function(x,y){ return x - y });
document.write("Num Array : ", numbers.toString(), "<br />");
 
// Combine arrays
var combinedArray = numbers.concat(mirzapur);
 
// Remove the last item
mirzapur.pop();
 
// Add items to the end
mirzapur.push("555-1212", "US");
 
// Deletes the first item
mirzapur.shift();
 
// Adds item to the first index
mirzapur.unshift("Tom Smith");
 
for (var i = 0; i < mirzapur.length; i++) {
  document.write(mirzapur[i], "<br />");
}

//The forEach() method calls a function (a callback function) once for each array element.

const array1 = ['a', 'b', 'c'];
array1.forEach(element => document.write(element , "<br />"));

//The map() method creates a new array by performing a function on each array element.
//The map() method does not execute the function for array elements without values.
//The map() method does not change the original array.

const array2 = [1, 4, 9, 16];
// pass a function to map
const map1 = array2.map(x => x * 2);
map1.forEach(element1 => document.write(element1 , "<br />"));

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
result.forEach(element1 => document.write(element1 , "<br />"));

//The every() method tests whether all elements in the array pass the test implemented by the provided function. 
//It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;
const array3 = [1, 30, 39, 29, 10, 13];
document.write(array3.every(isBelowThreshold) , "<br />");

//The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
document.write(array.some(even),"<br />");

//The indexOf() method searches an array for an element value and returns its position.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
document.write(beasts.indexOf('bison'),"<br />");

//The find() method returns the first element in the provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned.
const array5 = [5, 12, 8, 130, 44];
const found = array5.find(element5 => element5 > 10);
document.write(found , "<br />");

//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
//Otherwise, it returns -1, indicating that no element passed the test.

//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array6 = [1, 2, 3];
document.write(array6.includes(2));