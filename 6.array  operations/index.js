const removeArray = (num, array) =>{ 
let index = array.indexOf(num) 
  if(index !== -1){ 
    array.splice(index,1) 
    console.log(array) 
    return `Element is removed successfuly form index ${index}` 
  }else{ 
    return "Element not found....." 
  }  
} 
      
const searchArray = (num, array) =>{ 
let index = array.indexOf(num) 
  if(index !== -1){ 
    return `Element is present at index ${index}!` 
  }else{ 
    return "Element not found....."
  }
} 
  
const emptyArray = (array) =>{ 
 array.splice(0, array.length) 
 console.log(array)
} 

let array = [2, 5, 6, 9, 20, 17] 
console.log(array) 

let numToRemove, numToSearch; 
let htmlText = document.getElementById("array").innerHTML = `Array : [${array}]` 

const remove = () =>{
numToRemove = document.getElementById("no._remove").value 
if(numToRemove.length === 0){ 
  alert("Please enter some number...."); 
}else{ 
  let result = removeArray(Number(numToRemove), array) 
  document.getElementById("result").innerHTML = `${result}` 
}} 

const search = () =>{ 
numToSearch = document.getElementById("no._search").value 
if(numToSearch.length === undefined){ 
  alert("Please enter some number....."); 
}else{ 
  let result = searchArray(Number(numToSearch), array) 
  document.getElementById("result").innerHTML = `${result}` 
}} 

const empty = () =>{ 
emptyArray(array); 
document.getElementById("result").innerHTML = "Array is empty." 
} 

