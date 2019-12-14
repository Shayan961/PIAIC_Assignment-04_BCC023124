var input = prompt("Enter Password : ");
var correct = false;


input.split('').forEach(function(c){
    ascii = c.charCodeAt(0);
    var a = parseInt(ascii);
    if(!((a >= 65 && a <= 90) || (a >= 97 && a <= 122) || (a >= 48 && a <= 57)))
        correct = false; break;
});


if(correct && (isNaN(parseInt(input[0]))) && (input.length >= 8 ))
    document.writeln("Your Password Is upto the requirements")
else
    document.writeln("Enter a valid password. For character codes of a-z,A-Z & 0-9");
//Method 2
var letters = /^[0-9a-zA-Z]+$/;
if((input.match(letters)) && input.length >= 8 && (isNaN(parseInt(input[0]))))
{
    document.writeln("Your Password Is upto the requirements")
}
else
    document.writeln("Enter a valid password. For character codes of a-z,A-Z & 0-9")