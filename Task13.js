var date_1 = new Date("Jan 1, 1970 00:00:00 GMT+0500");
var date_2 = new Date();
var Elapsed_Milliseconds = date_2.getTime() - date_1.getTime();
var Elapsed_Minutes = Math.round(Elapsed_Milliseconds / (1000*60*60));
document.writeln("Current Date : ", date_2,"<br>");
document.writeln("Elapsed Millisecods since Jan 1st, 1970 : ", Elapsed_Milliseconds," ms <br>");
document.writeln("Elapsed Minutes since Jan 1st, 1970 : ", Elapsed_Minutes, " minutes");