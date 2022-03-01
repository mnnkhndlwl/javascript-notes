// Create a customer object by defining the attributes of John Smith
// The variable is a reference to the object in memory
//Objects are variables too. But objects can contain many values.
var cust1 = {
    name: "Muna bhaiya",
    street: "123",
    city: "mirzapur",
    state: "UP",
    email: "mirzapur@tripathi.com",
    balance: 120.50,
    payDownBal: function(amtPaid){
      this.balance -= amtPaid;
    },
    addToBal: function(amtCharged){
      this.balance += amtCharged;
    }
  };
   
  // Retrieve the value for the object
  document.write("Customer Name : ", cust1.name, "<br />");
   
  // Change the value for the object
  cust1.street = "215";
  document.write("Customer Address : ", cust1.street, "<br />");
   
  // Add a property to cust1
  cust1.country = "India";
  document.write("Customer Country : ", cust1.country, "<br />");

  // Delete a property
delete cust1.country;
 
// Cycle through all the properties for the object
for (var prop in cust1) {
    if (cust1.hasOwnProperty(prop)) { //The hasOwnProperty() method returns a boolean indicating whether 
        //the object has the specified property as its own property (as opposed to inheriting it)
        document.write(prop, "<br />");
    }
}
 
// Check if a property is in an object
document.write("name in cust1 : ", "name" in cust1, "<br />");

// Interact with an object using a function
function getInfo(cust){
    return cust1.name + " lives at " + cust1.street + " in " + cust1.city + " " + cust1.state + " email : " + cust1.email + " and has a balance of $" + cust1.balance;
  }
   
  document.write(getInfo(cust1), "<br />");
   
  // Call object methods
  cust1.payDownBal(20.50);
  cust1.addToBal(10.00);
   
  document.write(getInfo(cust1), "<br />");
 