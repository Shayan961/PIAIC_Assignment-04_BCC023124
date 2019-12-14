var date = new Date(); 
day = date.getDate();
if(day <= 15)
    document.writeln("First fifteen days of the month")
else
    document.writeln("Last days of the month");