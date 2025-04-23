let score="32abc"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//be aware that above score is not a number ,but it can be converted into no.
console.log( score);
console.log(valueInNumber);
//conversions
//"33abc"->NaN

let number = 1
let isNumber = Boolean(1)
console.log(isNumber);
//output:true

//"" gives ->false
//"harshu"  gives->true