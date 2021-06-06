

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var a;

inp.on("line", (data) => {
  a=data;
  var str="";
  var str1='';
  if(a.length%2!==0){
      var div=Math.floor(a.length/2);
    for(var i=0;i<a.length;i++){
        if(i===div){
            str+="*";
        }
        else{
            str+=a[i];
        }
    }
      console.log(str);
  }
    else{
        var div1=Math.floor(a.length/2);
    for(var j=0;j<a.length;j++){
        if(j===div1 || j===div1-1){
            str1+="*";
        }
        else{
            str1+=a[j];
        }
    }
        console.log(str1);
    }
    
});