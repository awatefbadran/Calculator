 var myBtn=document.querySelectorAll(".button");

 var myInput=document.querySelector("input");

 var myIN=document.querySelectorAll(".in");

 var mybls =document.querySelector(".bls")

 var myNum=document.querySelector(".btnn")

 var myequl =document.querySelector(".equel")

 var mydelete= document.querySelectorAll(".delete")

var myclear=document.querySelectorAll(".clear")



 myBtn.forEach((btn)=>{
 btn.addEventListener("click",(att)=>{
   myInput.value += att.target.dataset.value ;
 
 });
 });
   

 mydelete.forEach((att)=>{
   att.addEventListener("click",(div)=>{
 
    myInput.value= myInput.value.slice(0 ,-1)
});
   });

 
 myclear.forEach((att)=>{
 att.addEventListener("click",()=>{
myInput.value = null;
 });
 });
  


 myequl.addEventListener("click",()=>{
 var answer = eval(myInput.value);
   answer=myInput.value;
   myInput.value=eval(myInput.value);

 });

