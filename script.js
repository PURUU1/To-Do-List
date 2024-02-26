 let ol = document.querySelector('.ol');
let input = document.querySelector('input');
let sbtn = document.querySelector('#sbtn');
let clear = document.querySelector('#clear')  


function x(){
   console.log("x");
 ol.style.color = "red";

 }
function done(){
  ol.style.color = "green";
  
  
}
 function append(){
   ol.innerHTML += `<li >${input.value}</li> 
    <div id="a">Done<input type="checkbox"  style="background-color:red" id="cdone">
    Not Done<input type="checkbox" id="cnotdone"></div>`; 

   
   }

function check(){
  let cdone = document.querySelector('#cdone');
  let cnotdone = document.querySelector('#cnotdone');
  if(cdone.checked){
    
  cdone.style.color = "green";
  }
  
}






sbtn.addEventListener("click",()=>{
 
    if(input.value=="")
    {
      
      alert("Please enter a value");
    }
  else{
    
  append();
    check();
  }
  
})

clear.addEventListener("click",()=>{
  ol.innerHTML = '';
})

