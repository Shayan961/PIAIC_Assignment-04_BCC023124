//Code Through User Input
document.writeln("Following is the execution of code through user Input :<br><br>")
var input = prompt("Enter a Number :",0);
var input2 = input.split('');
let sum = 0;
for(var i = 0; i < input2.length; i++)
{
    sum += parseInt(input2[i]);
}
document.writeln("Input Number : ", input,"<br>");
document.writeln("Resultant Mean : ", Math.round(sum/input2.length),"<br><br>");

//Code through arrays
document.writeln("Following is the execution of code through arrays :<br><br>")
input = ['12345','44444','78979465464','5464213218','5454684654','11111111'];
for(var j = 0; j < input.length; j++)
{
    var input2 = input[j].split('');
    let sum = 0;
    for(var i = 0; i < input2.length; i++)
    {
        sum += parseInt(input2[i]);
    }
    document.writeln("Input Number : ", input[j],"<br>");
    document.writeln("Resultant Mean : ", Math.round(sum/input2.length),"<br><br>");    
}