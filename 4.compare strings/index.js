let string1, string2;

function strComp(){
let string1= document.getElementById("string1").value ;
let string2= document.getElementById("string2").value ;
let s1=string1.toLowerCase();
let s2=string2.toLowerCase();
  if(s1 === s2){
    document.getElementById("result1").innerHTML= "Strings are same"
  }else{
    document.getElementById("result1").innerHTML= "Strings are not same"
  }


  let s3=string1.localeCompare(string2)
   if(s3 === 0){ 
      document.getElementById("result2").innerHTML= "Strings are same"
    }else{
      document.getElementById("result2").innerHTML= "Strings are not same"
    }
 
  let result= s1.includes(s2)   
    if(result){ 
       document.getElementById("result3").innerHTML= "Strings are same"
    }else{
      document.getElementById("result3").innerHTML= "Strings are not same"
    } 

  let pattern = new RegExp(string1, 'gi') 
  let result2 =pattern.test(string2)
    if(result2){ 
       document.getElementById("result4").innerHTML= "Strings are same"
    }else{
      document.getElementById("result4").innerHTML= "Strings are not same"
    }   
}