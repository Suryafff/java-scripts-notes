
// ***********************string methods************************
  
const sk = new String(" heLLO a is this file is only created for string method implementation ")
const jk = new String('hiii')
console.log(sk)
//1.              to upper case and to localuppercase both are equal

console.log(sk.toUpperCase()); //used to convert in upper case


//output :HELLO THIS FILE IS ONLY CREATED FOR STRING METHOD IMPLEMENTATION

// 2.        to lowwer case and localelowercase both are equal 

console.log(sk.toLowerCase()) // used to convert in lower case


 // output: hello this file is only created for string method implementation

//3.            .tostring used to convert in string

// 4.           CHAR AT  (used to find characterr position )

console.log(sk.charAt(11)) //output :f

//5            code point at and  CHAR CoDE AT (used to find character code )

console.log(sk.charCodeAt(10))//output 97 //a

//6.            concat (used to addtwo string ) some more methods are 
        console.log(jk.concat(sk))

    //templates literals    (``) backticks 
        console.log(`${jk} ${sk}`)   //best practice
        //+ method 
        console.log(jk+sk);

// 7.       Endswith (used to check last input of strings and give result in boolean )
   
console.log(sk.endsWith(" ")) // true

//8.          includes  (Used to find wether a word is present or not in a string result in boolean)
    
    console.log(sk.includes('method'))
  
    //9.     indexof (Used to find index of a character but only fetch first occurance not so on)

    console.log(sk.indexOf("a",20))

    //10.           Last index of (used to find last occurance of a character )

   console.log(sk.lastIndexOf("a",16))

   //11.      length (Used to find length of a string)
    console.log(sk.length)// 65
    //12.          Match(used to match the character from string)

    console.log(sk.match("method"))
    //output :method',
//   index: 43,
//   input: 'heLLO this file is only created for string method implementation ',
//   groups: undefined

//13.   start with(used to check first input of strings and give result in boolean )

        console.log(sk.startsWith("heLLO"))

      // 14. substring  (used to making a sustring from a string )

      console.log(sk.substring(8,18))//exclude 8 and 18
      console.log(sk.sub(4,25))
      console.log(sk.substr(8,18)) //includes 8 and 18

      //15.replace(use to replace the word from a string )

    console.log(sk.replace("file","folder"))
   
    //16.  repeat (used to repeat the string )
    console.log(sk.repeat(1))

    // 17 . search
    console.log(sk.search("method"))

    //18. slice (used to extract the string with given position number)
    console.log(sk.slice(8,18))

    // 19. split (used to split string into  array of substring )
    console.log(sk.split(" ",8))//output :   '',     'heLLO',
    console.log(sk.split("","e")) //output   ' ', 'h', 'e',

    //20.                   trim (used to remove white spacing from a string)
    console.log(sk.length)
    console.log(sk.trimStart().length);
 
   //21 valueof (is use internally in javscript not use in code)



//********************************************************************************* */

console.log("\n")
console.log("\n")



// ****************************number metods in java script***************************
const sku = 4000
console.log(sku)
console.log(typeof sku)
const skk = new Number(562.466)
 console.log(skk)


//                        METHODS OF NUMBER

//      1. to fixed(used to convert in fixed value without decimals  )
console.log(skk.toFixed())//5603

//  2 . to precision(used to give a precise value) returns a string
console.log(skk.toPrecision(4))
const e= -586
//3. to locale string
const number_e = 80000000
console.log(number_e.toLocaleString());


// ***************************Maths function in java script***************************

//1. round (used to round off)
console.log(Math.round(skk))

//2. ceil (used to round off at upper value irrespective of number)
console.log(Math.ceil(skk))

//3. floor (used to round off at upper value irrespective of number)
console.log(Math.floor(skk))
// 4. abs (use to convert only a neative value to positive )
console.log(Math.abs(e))

// 5.  MAX AND MIN (used to find max and min)
console.log(Math.max(5,4,7,8,9))
console.log(Math.min(5,4,7,8,9))



// maths random function 
      //math.random function generates a number betwwen 0  to 1
      console.log(Math.random());
      console.log(Math.random()*10);
      console.log(Math.round(((Math.random()*10)+1)));
      
//all are used to generates number 1 to 10

//for generating number from given range 
let max=200
let min = 110
console.log(Math.round(((Math.random()*(max-min+1))+min)));



