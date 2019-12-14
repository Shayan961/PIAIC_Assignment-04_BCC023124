var age = parseInt(prompt("Enter Your Age : "));
var Current_Date = new Date();
var YOB = Current_Date.getFullYear() - age;
document.writeln("Your Age is : ", age, "<br>");
document.writeln("Your Year Of Birth is : ", YOB);