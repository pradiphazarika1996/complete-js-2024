
// if(true){

//     const a = 10;
//     let b = 20;
//     var c = 30;
// }



// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "pradip";

//     function two(){
//         const email = "pradip@gmail.com"
//         console.log(username);
//     }
//     // console.log(email);
//     two()
// } 
// one()

const myObj = {
    name:"pradip",
    age:34,

    welcomeMessage:function(){
        // console.log(this.name);
        // console.log(this);

    }
}

// myObj.welcomeMessage()



// iifi - global scope ke pollution ko stop karne k liye use karte hai iifi

// (function chai(){
//     // console.log(`Db connected`)
// })();

// (function two(){
// console.log("two");
// })();

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();