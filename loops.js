//forloop
let  arr=[1,2,3,4,5,6,7,8,9]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}
//for loops for printing number 
for (let index = 0; index <20; index++) {
    const element = index;
    console.log(element)
    
}
//forof loops are not used on object 
//because object are not iletrateable
const obj ={
    coursename: "js master",
    courseprice: 6999,
}
//for printing through for of or for in loops console.log on itereator
//no need to giving increrment and decrement operator  
for (const course of arr) {
    console.log(course)
}
//for in loops are used on object 
for (const values in obj) {
    if (Object.hasOwnProperty.call(obj, values)) {
        const element = obj[values];
        console.log(element)
    }
    
}

//for each loops
//for each loops are recived a callback function ,it can accept three parameter (items ,index and array)
//call back function doesnot require any  name and function keyword 
 sarr=["lal bahadur verma","shanti devi"]
// arr.forEach(num => {
//     console.log(num)
// });
sarr.forEach((num,index,sarr) => {
    console.log(num,index,sarr)
});

//this is for pratice of map,filter and reduce 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  books.forEach((element) => {
    console.log(element.genre)
  });
  //map :::::The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
//syntax of decleration and always start with capital letter
//take call back and return default 

const nmap  =  new Map();
// methods of maps 
//for sending values in maps we use map.set and for finding values at keys we use map.get and for finding size in map we use map .size and for deleting a the value from map use map.delete and only give keys valyes for delete 
//no two avalues are same in maps

nmap.set("IN", "india")
nmap.set("AUS",'austrila')
nmap.set("afg","afghanisthan")
nmap.set("IN","india")
console.log(nmap.get('IN'))
console.log(nmap.size)
console.log(nmap.delete("IN"))
console.log(nmap)
for (const number of nmap) {
    console.log(number)
    
}

console.log(nmap.keys())
console.log(nmap.entries())//for finding enteries in maps 

                    //reduce
//reduce take three parameter acculumator ,current value and inital value
//it is genrally  used  to summation of an array
const alpha =[1,2,3,4,5,6,7,8,9,10]
const my_total =alpha.reduce((acc,currval) => acc+currval,0)
console.log(`after sum ${my_total}`)
















                        //fiters
//filters used to filters from  object such as shown 





