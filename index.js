let text=document.querySelector("input");
let button =document.querySelector("button");
let come = document.querySelector(".come")
let container = document.querySelector(".container")
let todo= document.querySelector(".todo")

console.log(text.value)


//functionality
button.addEventListener("click", ()=> {





  if(text.value===""){
    alert("enter some text");
  }

  
  else{
    let a= document.createElement("div");
    let z= document.createElement("div")
    let b= document.createElement("li");
    b.style.marginTop="2%"
    b.innerText=text.value;
    text.value=""




    //for remove button
    let c= document.createElement("button")
  c.style.width="50px";
  c.style.height="25px";
c.style.backgroundColor="blue"
c.style.color="#fff"

   c.innerText="remove"
    a.appendChild(b)




//for edit button
 let d= document.createElement("button")
  d.style.width="50px";
  d.style.height="25px";
d.style.backgroundColor="blue"
d.style.color="#fff"

   d.innerText="Edit"
z.appendChild(d)




//for done button
let e= document.createElement("button")
e.style.width="50px";
e.style.height="25px";
e.style.backgroundColor="blue"
e.style.color="#fff"

 e.innerText="Done"
z.appendChild(e)


//for arrenaging


    z.style.display="flex";
    z.style.flexDirection="coloum"
   // z.style.justifyContent="space-between";
    z.style.columnGap="8%"
    z.appendChild(c)
     z.style.paddingTop="1%"
    come.appendChild(a)
    come.appendChild(z)
    todo.appendChild(come)
  
    




    // remove btn
     c.addEventListener("click",function(){
come.removeChild(z);
come.removeChild(a);
     })
    

     //done btn
     e.addEventListener("click",()=>{
a.style.backgroundColor="green";
      come.removeChild(z);
    })

// edit btn

d.addEventListener("click",()=>{
  let x =document.createElement("INPUT");
  x.setAttribute("type", "text");
  

  //save btn

  c.disabled=true;  
  d.disabled=true;
  e.disabled=true;
let g= document.createElement("button")
g.style.width="50px";
g.style.height="25px";
g.style.backgroundColor="blue"
g.style.color="#fff"

 g.innerText="save"
z.appendChild(g)

a.appendChild(x)

g.addEventListener("click",()=>{
  if(x.value===""){
    alert("enter some text");

  }
  else{
  b.innerText=x.value;
  a.removeChild(x);
  z.removeChild(g)
  c.disabled=false;  
  d.disabled=false;
  e.disabled=false;
  }
})
  
     })
    } 
})


let reset_btn= document.querySelector("#reset")
reset_btn.addEventListener("click",()=>{
  window.location.reload();
})
