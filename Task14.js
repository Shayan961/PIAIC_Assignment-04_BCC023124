var date = new Date();
document.writeln("Current Time is : ", date,"<br>");
date.setHours(date.getHours() - 1 );
document.writeln("An Hour ago it was", date);