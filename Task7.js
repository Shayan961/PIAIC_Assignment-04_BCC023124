var str = "The quick brown fox jumps over the lazy dog";
let count = 0, last = 0;
str = str.toLowerCase();
while(true){
    last = str.indexOf('the',last);
    if(last == -1)
        break;
    else
    {
        last += 1;
        count++;
    }
}
document.write("Occurences : " , count);
console.log();