function counting()
{
var today = new Date();
var hours = today.getHours();
if(hours<10) hours = "0"+hours;
var minutes = today.getMinutes();
if(minutes<10) minutes = "0"+minutes;
var seconds = today.getSeconds();
if(seconds<10) seconds = "0"+seconds;

document.getElementById("clock").innerHTML = hours+":"+minutes+":"+seconds;
setTimeout("counting()",1000);
}
