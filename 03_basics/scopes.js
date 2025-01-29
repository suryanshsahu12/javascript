// let a=10
// const b=20
// var c=30

// console.log(a);
// console.log(b);
// console.log(c);


// let a=100// global scope
// if(true){
//     let a=10
//     console.log("INNER:",a);//inner scope
// }

// console.log(a);


//new method for declaaring function

// const chai=function (){
//     let username="abhu"
//     console.log(this);  // here (this) is usedd for determining the context in which the code is runing
    

// }
// chai()



//------------------------------------------------------------------------------------------

//  ARROW defining

// const chai=()=>{
//     let userName="abhu"
//     console.log(this);
    
// }
// chai() this shows in arrow function (this) is producing null value  


//Arrow ex:

// const addTwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4));

// Arrow (Implicit return)
// const addTwo=(num1,num2)=> num1 + num2
// console.log(addTwo(3,4));                // NOTE: if you're using {} use return type example for arrow but when you're using () use implicit arrow type
  //                                              ^^
 //                                               ||
//const addTwo =(num1,num2)=>({Username:"abhu"}) --
// console.log(addtwo(3,4));

// Immediately Invonked function expression(IIFE)
// (function chai(){
//     console.log((`DB conected`));   // here function definition is in() and to call we agin use ()and this concept is used to reduce global polllution    
// })();
