//***************ARRAYS Declearation****************************
//ways of decelration
const arr=[1,2,3,4,5,6,7]
// console.log(arr)
//console.log(typeof arr) object
const arr2 =new Array(1,2,3,3,7)
// console.log(arr2)
//console.log(typeof arr2) object


//***************ARRAYS Methods****************************
//1.push(used  to insert element from last )
 arr.push(36)

console.log(arr)

//2. pop (used to remove one element from last )
arr.pop()
console.log(arr)

//3. unshift  (used to insert a element form start )
arr.unshift(36)
console.log(arr)

//4. shift (used to remove a element from start)
arr.shift()
console.log(arr)
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

//4. splice(used to extract the subarray from array )
// range includes and produce a shallow copy 
// shallow copy means change in original string 
console.log("\n")
const new_arr=arr.slice(1,4)
console.log(new_arr)
console.log(arr)

//returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.



// 5. slice(useed to making subarray  from array)
// last range doesnot includes and produce a deep copy
// deep copy means does not change in original array
const old_arr = arr.slice(1,4)
console.log(old_arr)
console.log(arr)
//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.



//    methods for adding two array 

//6        .join(Adds all the elements of an array into a string, separated by the specified separator string)

const jion_arr= arr.join(arr2)
console.log(jion_arr)

//7. concat(Combines two or more arrays. This method returns a new array without modifying any existing arrays.)

const a4= arr.concat(arr2)
console.log(a4)

//spread operator(.....)
console.log (...arr,...arr2,...a4)


// 8. flat (Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.)
 const arr3 = [1,2,[2,6],[6,5,69,58]]
 console.log(arr3.flat(Infinity))
 // used to convet nested array into a single array (enter depth means index)

 // 9.for finding a enterd is array or not 
 console.log(Array.isArray(arr3))//true this is array
 console.log(Array.isArray("suraj"))// false it is not array
// used to convert a enterd element into array 
 console.log(Array.from(arr3))
 console.log(Array.from("suraj")) 


console.log(Array.from({name: "suraj"}))// returns null 
