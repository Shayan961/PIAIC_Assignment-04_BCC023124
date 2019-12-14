var input = prompt("Enter a Postive Float Value",0)
if(input > 0)
{
    input = parseFloat(input);
    document.write("Input : ",input,"<br>");
    document.write("Round : ",Math.round(input),"<br>");
    document.write("Floor : ",Math.floor(input),"<br>");
    document.write("Ceil  : ",Math.ceil(input),"<br>");
}