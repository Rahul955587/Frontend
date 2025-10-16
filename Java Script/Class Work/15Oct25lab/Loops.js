//      Pattern

// for (let i = 5; i >=0; i--) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

let arr=[10,20,30,40,50];
let len=arr.length;

//length of Array
console.log(len);
console.log(arr.length);

//Access values by loop
for(let i=0;i<len;i++){
    console.log(arr[i]);
}

//New loop
for(let num of arr){
    console.log(num);
}


