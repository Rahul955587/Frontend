function calc(calculationFn,num1,num2){
    console.log(calculationFn(num1,num2));
}
function sum(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
calc(sum,10,5);
calc(sub,10,5);


const arr=[1,2,3,4,5,66,7,8,9,99];
// Find Method
// const div=function(num){
//     return num%33===0;
// }

// const answer=arr.find(div);

//return first value.
const answer=arr.find((num)=>{
    return num%33===0;
});
console.log(answer);

//return index
const answer1=arr.findIndex((num)=>{
    return num%33===0;
});
console.log(answer1);

//return array of values
const answer2=arr.filter((num)=>{
    return num%33===0;
});
console.log(answer2);


//array elements by multiple by 2;
const newarr=arr.map((num)=>{
    return num*2;
});
console.log(newarr);

//