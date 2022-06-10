
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
document.getElementById("rightNowDisplay").innerHTML = dateTime+ " " + daylist[day];
