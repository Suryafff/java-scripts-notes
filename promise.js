// what is promise 
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


//Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.



        //syntax of promise 
      
    //1.
        const promiseOne = new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("promsise one excuted")
                //resolve is neccessary to connect inside the async task so the whole promise is excuted
                resolve()
            },100)
        
        })
        promiseOne.then( function (){
        console.log("promise consumed")
        })

  //2.      //no need to hold in a variable
      new Promise(function (resolve,reject){
        setTimeout(() => {
            console.log("no need to handle in a variable")
            resolve()
        }, 100);
        //if resolve is connected outside the async task then the promise is consmed first inrespective of promise excution    
   
      }).then(function(){
        console.log("promise without name is also consumed")
      })
      // .then is used for promise consumption


    //3. destructuring of a promise 
     const promiseThree= new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve({username:"lucifer",password:"123654"})
        },1000)
     })
          //if we want to destructre it we used chainable then which is also called thenable

     promiseThree.then(function(user){
        console.log(user)
        return user.username,user.password
     })
     .then(function(username){
        console.log(username)
        return username.password
     }) 
     

     //4. reject in js 

     const promiseFour= new Promise(function(resolve,reject){
        setTimeout(()=>{
            let error= false;
            if(!error==true)
            resolve({username:"lucifer1235455",password:"123"})
        else{
            console.log("something went wrong")
        }
        },1000)
     })
     .then(function(suer){
            console.log(suer)
            return suer.username
     })
     .then(function(username){
        console.log(username)
     })
     .catch(function(error){
        console.log("error",error)
     })

     //5.       handle promises through async and  await

     const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error =false
            if (!error) {
                resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    });
     
    
    async function cosumePromisefive(){
        try {
            const response = await promiseFive
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    cosumePromisefive()
    // in async await we can not handle error gracefully so dont use manually


    // for fetching a data 
    fetch('https://api.github.com/users/Suryafff')
    .then(function (response){
        console.log(response)
        return response.json
    })
    .then(function (data){
        console.log(data)
    })
    .catch(function(error){
console.log(error)
    
    })


    fetch( "https://api.github.com/users/Suryafff/repos")
    .then(function (response){
        console.log(response)
        return response.json
    })
    .then(function (data){
        console.log(data)
    })
    .catch(function(error){
console.log(error)
    
    })