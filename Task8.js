var tens = ['zero','one','two','three','four','five','six','seven','eight','nine'];
var tens_one = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var tens_two = ['not used','not used','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];
var words = ['not used','not used','not used','hundred','thousand','thousand',"hundred thousand",'million'];
var input2 = prompt("Enter A Number", 0);
var input = input2;
var count = input.length;
var input2 = parseInt(input);
var j = 0, output = "", temp = "";
var splited_Numbers = [],bools = true;
document.writeln("Input : ", input2,"<br>");
for(var k = count-1; k >= 0; k--)
{
    splited_Numbers[k] = input2 % 10;
    input2 = parseInt(input2/10);
}
function eval_two()
{
    if(input[j] == '1')
    {
        output += ((tens_one[splited_Numbers[j]]) + ' ');
        i--;
    }
    else
        output += ((tens_two[splited_Numbers[j]]) + ' ');
}
for(var i = count; i >=  1 ; i--)
{
    if(i == 1)
        output += (tens[splited_Numbers[j]]);
    else if(i == 2)
        eval_two();
    else if(i == 7)
    {
        output += (tens[splited_Numbers[j]]) + ' ';
        output += words[i];
        break;
    }
    else
    {
        if(i == 5)
        {
            output += ((tens_two[splited_Numbers[j]]) + ' ');
            j++;
            i--;
        }
        output += ((tens[splited_Numbers[j]]) + ' ');
        output += ((words[i]))
        for(var k = j+1; k < splited_Numbers.length; k++)
        {
            if(splited_Numbers[k] != 0)
                bools = false;
        }
        if(!bools)
        {
            if(splited_Numbers.length == j + 3)
                output += ' and ';
            else
                output += ' ';
        }
        else
            break;
    }
    j++;
}
document.writeln("Output : ", output,"<br>");
//The Code is not complete as it still has some errors
//the code works just fine when input is under the limit of hundred thousands