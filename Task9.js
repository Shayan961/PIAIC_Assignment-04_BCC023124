var str = "<p><strong><em>Only Print This</em></strong></p>"
document.writeln("Str Before Removal of HTML Tags : ", str);
var temp = document.createElement("div");
temp.innerHTML = str;
document.writeln("Str now is : ", temp.textContent);