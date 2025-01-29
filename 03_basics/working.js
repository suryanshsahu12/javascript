// // working performs let takes an example

// let val1=10
// let val2=20
// function addNum(num1,num2){
//     let total=num1 +num2
// return total
// }
// let result1=addNum(val1,val2)
// let result2=addNum(10,20)
// step1: global execution(this)

// step2:memory phase(value allocation){firstly in all values they're assigned with undefined}
//     addNum=definition
//     result1 =undefined
//     result2=undefined

// step3:execution phase assign values
//       addNum ---->new variable +execution phase
//       here above step1 and step2 will we done 
//       so val1 =undefined,val2=undefined
//       total =undefined
      
//       execution 
//       num1=10
//       num2=5
//       total=15
// step4: total value is returned to global execution context

// step5:step 3 environment deleted

// step6: step3 execution gives result1&2


