function create(){
  let num= document.getElementById("table").value ;
  let arr=[];

  for( let i=1;i<=10;i++){
  arr.push(`${num} X ${i} = ${num*i}`);
  }

  for(i=0; i<arr.length;i++){
    document.getElementById("result").innerHTML+= `${arr[i]} <br>`
  }
}