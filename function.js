//for declearing a function function keyword is used
//ex function function _name()
//{
    //function codes
//}
function sayHello(){
    console.log("say hello")
}
// sayHello()
function users(unkown) {
    console.log(`hello ${name} your function is running so nice `)
    //this method is known as template literals and it is eaasy to use and excute
}
let name ="suraj"
users(name)
//write a basic function for calulating sum of two numbers
//these are the methds of returning from a function 1. using another variable
function sum(num1,num2)
{
    let n3 = num1+num2
    return n3
}
   
   

console.log(  sum(49,51))
//the probles on using this are follow
console.log(sum("3","7"))//output : 37 because js treated first and second both as string 
//when no argument is passed in function it return undefined 
function hello( fname ="ram"){
 console.log(`this is my function and i am saying hello to you mr ${fname}`)
}
 hello("suraj")
//when the values aree assign in parameter then is can be overwrite by the argument as shown above 
// when no argument are passed then it run for by default values
hello() 

// rest operator convert function argument into array
function summation(...number){
     return number
} 
console.log(summation(200,145,4785,4785662,100))
 // passing the object through function
 const obj={
    name :"suraj kumar verma",
    cclass : "B.C.A",
    roll_no : 23,
 }
 function handlanobject(handleobj) {
    console.log(`your name is ${handleobj.name} and your current class is ${handleobj.cclass} and Roll no is ${handleobj.roll_no}`)
    
 }
 handlanobject(obj)