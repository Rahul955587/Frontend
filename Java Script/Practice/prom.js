// let str="Rahul";
// let i=1;
// for(let val of str){
    
//     console.log(val,`${i} character`);
//     i++;
// }

// const student={
//     name:"Rahul",
//     sec:"FD",
//     roll:2415,
//     sex:"Male"
// };
// for(let i in student){
//     console.log(i,":",student[i]);
// }

// for(let i=0;i<=100;i++){
//     let res=(i%2===0) ? "Even":"Odd";
//     console.log(i,res);
// }

// let num=55;
// let res=prompt("Enter ");
// while(res!=num){
//     res=prompt("Enter Agani ");
// }
// console.log("Congrats");

// let str="Rahul";
// let str1="AVNI";
// console.log(str.length,str1.length,str[0],str1[0]);
// console.log(str.toUpperCase());
// console.log(str1.toLowerCase());

// let sentence=`this is a \nspecial \t string`;
// console.log(sentence);

// let shop={
//     Shopname:"Kotha",
//     product:"chut",
//     price:6000
// }
// console.log("Shop name",shop.Shopname,"product",shop.product,"price",shop.price);
// console.log(`Shop name ${shop.Shopname} product ${shop.product} price ${shop.price}`); 

// let str="     Rahul  ";
// console.log(str.length);
// console.log(str.trim());
// let s=str.trim();
// console.log(s.length);

// let str="abcdefgh";
// let a=str.slice(0,3);
// let c=str.concat(a);
// console.log(c);

// let str="Sanya";
// let neww=str.replace("n","ni"); 
// console.log(neww);
// console.log(str.charAt(0)+" R");
// console.log(str.replaceAll("a","@"));

// let name=prompt("Enter your name: ");
// let username="@"+name+name.length;
// console.log(username); 

// let arr=[1,2,3,4,5,6];

// console.log(arr[0]);
// arr[0]=100;

// console.log(arr.length);

// console.log(arr);

// console.log(typeof(arr)); 

// for(let i of arr){
//     console.log(i*10);
// }

// for(let i in arr){
//     console.log(i*10); 
// }

// arr.push("Rahul");
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.toString());
// console.log(arr);
// let arr1=["avni","Sanya"];
// let aa=arr.concat(arr1);  
// console.log(aa);
// arr.unshift("Avni");
// console.log(arr);

// let ar=[5,6,7,8,9];
// console.log(ar.shift());
// console.log(ar);
// console.log(ar.slice(0,3));
// let t=ar.splice(1,0,100);
// console.log(t);

// let arr=["rahul","shikhar","abhinav"];
// let ar=[1,2,3];

// console.log(arr.toString());
// arr.push("ra");
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.concat(ar));
// arr.unshift(100)
// let a=arr.shift();
// console.log(a);
// console.log(arr);
// console.log(arr.slice(0,2));
// console.log(arr.splice(1));

// function name(mes){
//     console.log(123);
//     console.log(456);
//     console.log(mes);
// }
// name("hello ");

// function sum(a,b){
//     console.log(a+b);
// }
// sum(100,11);

// function product(a,b){
//     return a*b;
// }
// console.log(product(10,5));


// const naam=(n)=>{
//     console.log(n);
// }
// naam("rahul");

// const add=(a,b)=>{
//     return a+b;
// }
// console.log(add(10,50));

// function vowel(str){
//     let count=0;
//     st=str.toLowerCase();
//     for(let char of st){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowel("rAhul");

// const vow(str);

//  const vol=(str)=>{
//     let count=0;
//     for(let char of str){//rahul
//         if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
//             count++;
//         }
        
//     }
//     console.log(count);
//  }
//  vol("Rahul");

// console.log(1==1);
// console.log(1===1);
// let arr=[1,2,"Rahul","avni"];
// arr.forEach((val,idx)=>{
//     console.log(val,"\tindex-",idx,);
// });

// let ar=[1,2,3,4,5];
// ar.forEach((value)=>{
//     console.log(value*value);
// });

//Map
let arr=[1,2,3,4,5,6];
let a =arr.map((val)=>{
    return val*2;
});
console.log(arr);
console.log(a);

//Filter

let even=arr.filter((val)=>{
    return val%2===0;
});
console.log(even);

// reduce

let sum=arr.reduce((res,current)=>{
    return res+current;
});
// greatest number
console.log(sum);
let greater=arr.reduce((pre,current)=>{
    return  pre>current ? pre:current;
});
console.log(greater);

let marks=[88,99,98,95,45,12,36,96];
let highest=marks.filter((val)=>{
    return val>90;
});

console.log(highest);

let num=[1,2,3,4,5];
let summ=num.reduce((res,current)=>{
    return res+current;
});
let pro=num.reduce((p,c)=>{
    return p*c;
});
console.log(summ);
console.log(pro);




















