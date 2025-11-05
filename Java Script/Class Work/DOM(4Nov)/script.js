// const mainHeading = document.getElementById("title");
// mainHeading.textContent="Hello from JavaScript!";
// mainHeading.textContent="Abhay";

// mainHeading.textContent="{R}{A}{H}{U}{L}";
// const triggerButton=document.getElementById("btn");
// triggerButton.onclick=()=>{
//     mainHeading.textContent="{R}{A}{H}{U}{L}";
// };

// const item=document.getElementsByClassName("list-item");
// console.log(item);
//
// item[0].textContent="HEllo";
// item[1].textContent="Yello";
// item[2].textContent="22222";

//textContent
//text html
//inner text

// const item=document.querySelector(".list-item");//Only fist match return
// const item1=document.querySelectorAll(".list-item");//All value return
// item.textContent="22222";
// console.log(item);

const chess=document.querySelector(".chessboard");

const oddRow=`<div class="square"></div>`.repeat(8);
const evenRow=`<div class="square1"></div>`.repeat(8);
const completeHtml=`${oddRow}${evenRow}`.repeat(4);
chess.innerHTML =completeHtml;
// console.log(completeHtml);