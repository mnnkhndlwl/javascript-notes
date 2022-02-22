// ---------- DATE ----------
// Get a Date object
var curDate = new Date();
 
document.write("Date : ", curDate.getDate(), "<br />");
document.write("Month : ", curDate.getMonth(), "<br />");
document.write("Day : ", curDate.getDay(), "<br />");
document.write("Year : ", curDate.getFullYear(), "<br />");
document.write("Time : ", curDate.getHours(), ":", curDate.getMinutes(),
  ":", curDate.getSeconds(), ":", curDate.getMilliseconds(), "<br />");
 
// Create a Date object
var myBD = new Date("october 21, 2015");
 
var msForBD = myBD.getTime();
var timeNow = curDate.getTime();
var tilMyBD = msForBD - timeNow;
 
document.write("Days till : ", tilMyBD / (1000 * 60 * 60 * 24), "<br />");
 
