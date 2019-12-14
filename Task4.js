var email = prompt("Enter Your Email : ","");
var accepted = false;
if(email != "" && email.includes('@'))
{
    var position = (email.indexOf('@'));
    if(email.length > position+1)
    {
        if(email.includes('.',position) && (email.length > email.indexOf('.',position)+2))
        {
            document.writeln("Email Accepted");
            accepted = true;
        }
    }
}
if(!accepted)
    document.writeln("Email Not Accepted");