//area of traingle
function triArea(){
let height= document.getElementById("trih").value;
let base= document.getElementById("trib").value;
let triResult= 0.5*base *height;
document.getElementById("result1").innerHTML= `Area of Triangle: ${triResult}`;
}

//area of rectangle
function RecArea(){
let length= document.getElementById("recl").value;
let breadth= document.getElementById("recb").value;
let recResult= length*breadth;
document.getElementById("result2").innerHTML= `Area of Rectangle: ${recResult}`;
}

//area of circle
function CirArea(){
let radius= document.getElementById("cirr").value;
let cirResult= 3.14*radius*radius;
document.getElementById("result3").innerHTML= `Area of Triangle: ${cirResult}`;
}