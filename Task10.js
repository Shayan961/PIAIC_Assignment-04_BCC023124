//Code Through User Input
document.writeln("Following is the execution of code through user Input :<br><br>")
var input = prompt("Enter a deciaml no");
document.writeln("Input : " , input,"<br>");
var deciaml_Places = prompt("Enter Decimal Places",2);
input = parseFloat(input).toFixed(parseInt(deciaml_Places));
document.writeln("Input with only ",deciaml_Places, " decimals : ", input,"<br><br>");

//Code through arrays
document.writeln("Following is the execution of code through arrays :<br><br>")
var input_array = [[16.765,2],[12.37982,2],[-9.3079499,4]];
for(var i = 0; i < 3; i++)
{
    document.writeln("Incoming Number : ", input_array[i][0],"<br>");
    document.writeln("Required Decimal Places : ", input_array[i][1],"<br>");
    document.writeln("Resultant Number : ", input_array[i][0].toFixed(input_array[i][1]),"<br><br>")
}