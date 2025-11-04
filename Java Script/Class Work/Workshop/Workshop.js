//Var scope ko ignore kar deta hai.
// var name="Rahul";
// var name="Avni";
// console.log(name);

const sum=(num,num2)=>{
    return num+num2;
};
//or
const sum1=(num,num2)=> num+num2;
//or
const double=num=>num*2;
//
// const num1=9;
// const isOdd = (num) => num % 2 !== 0;
// console.log(isOdd(9))

const isOdd=(num)=> num%2===1;
console.log(isOdd(9));


const greet=(name)=> "Hello, "+name+"!";
console.log(greet("Rahul"));

const add=(a,b)=> a+b;
console.log(add(10,10));

const isEven=(num)=>num%2===0;
console.log(isEven(10));

const numbers=[1,2,3,4,5];
const squares=numbers.map((num)=> num*num);
console.log(squares);

const name="Riya";
const age=21;
console.log("Hello, my name is "+name+" and I am "+age+" yearodd.");

console.log(`Hello, My name is ${name} and i am ${age} years old, i was born in ${2025-age}.`);

const user="Rahul";
const points=120;
console.log(`Hey ${user} ,you have ${points} points`);


const person={
    firstNAme:"Nitin",
    lastName:"Kumar",
    age:20,
    introduce:function(){
        console.log(`Hey my naem is ${this.firstNAme} ${this.lastName} and i am ${this.age} year old.`);
    },
};
console.log(person.firstNAme);
console.log(person.lastName);
person.introduce();

person.birthyear=2025-person.age;
console.log(person);

const man={
    born:24,
    month:"Dec",
    year:2006,
    introduce:function(){
        console.log(`hi my age ${this.born} month ${this.month} and year is ${this.year}`);
    },
};
console.log(man.born);
console.log(man.month);
man.introduce();

const fruits=["apple","banana","kiwi","mongo"];
// const firstFruit=fruits[0];
// const secoundFruit=fruits[1];
const [firstFruit,secoundFruit]=fruits;
const  [, ,thirdFruit]=fruits;

const numb=[1,2,3,4,5,6,7,8,9,10];
const[firstnum,secondnum,,fourthnum,,sixnum]=numb;
console.log(sixnum);

// rest parameter
const arr=[1,2,3,4,5,6,7,8,9,10];
const[first,secound,...rest]=arr;
console.log(first);
console.log(secound);
console.log(rest);

const arr2=[10,11,12,13];
// const result=arr.concat(arr2);
const result=[...arr,...arr2];
console.log(result);

const naam="RAhul";
const umar=20;

const person={
    naam:naam,
    umar:umar,
};



