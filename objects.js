// ***************this file is for object **********************
 const mus = Symbol('myskey')
 // 1. ways of declearing a object 
const obj ={
    name: "suraj",
    fathername :"lal bahadur verma",
    email : "surajverma3082005@gmail.com",// commas are important
    mohersname : "shanti devi",
    householdincome : "145600",
    [mus] :'keys1'
}

//2. 
const appuser = {}
console.log(typeof appuser) 
// to assigning keys and value in this type
appuser.username ="surajkumar"
appuser.password = "surya@123"
appuser.lastloggedin =['monday','tuesday'] 
console.log(appuser)

console.log(appuser.username)
console.log(appuser["lastloggedin"])
//ways of accessing
console.log(obj.name)
console.log(obj["name"])

// used to find wether the keys are present or not 
console.log(obj.hasOwnProperty("name"))

//object values can be change in between programs
obj.name = "sumad"
console.log(obj.name)
//frezee method is used to prevent changes in object


Object.freeze(obj)
obj.name = "sumadaaaaaaaaa"
console.log(obj.name)

//nested object
const wedusing ={
    email: "suraj@gmail.com",
    fullname: {
        userfullname :"suraj#1254",
        name :{
            firstname :"suraj",
            lastname: "kumar",
            password :{
                passkey :"147852369",
                psss:{
                    hel : "hello",
                }

            }
        }
    }
}

//acessing  nested object use only dot notation 
console.log(wedusing)
console.log(wedusing.fullname.name)
// adding two object

const object1={
    1: "suraj",
    2: "shivam",
}
const obj2 ={8:"sumit" , 20: "kela"}
const obj6 = Object.assign({},object1,obj2)// {} is an optional parameter
console.log(obj6)
// 2. method 
const g4 ={...object1,...obj,...obj2}
console.log(g4)
//ways for using spread operator 
console.log({...object1,...obj,...obj2})
//for finding keys of object 
console.log(Object.keys(wedusing.fullname.name.password.psss))
//for finding values in object 
console.log(Object.values(wedusing.fullname.name.password.psss))