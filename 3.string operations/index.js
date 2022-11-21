function reverseString(){
let str = document.getElementById("reverse").value;
let result =str.split("").reverse().join("");
document.getElementById("result1").innerHTML=`Reverse of ${str}: ${result}.`;
}

function replaceString(){
let string ="String: Welcome to Sinhgad"
let str1= document.getElementById("replace1").value ;
let str2= document.getElementById("replace2").value ;

let result= string.replace(str1, str2);
document.getElementById("result2").innerHTML=`Final string is: ${result}.`;

}

function checkPal(){
let str= document.getElementById("string1").value ;
let rev= str.split("").reverse().join("");

if( str.toLowerCase () === rev.toLowerCase()){
  document.getElementById("result3").innerHTML=`The string is Palindrome.`;
}else{
  document.getElementById("result3").innerHTML=`The string is  not Palindrome.`;
}
}