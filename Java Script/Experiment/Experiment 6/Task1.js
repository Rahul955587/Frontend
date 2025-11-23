function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());

function multiply(x) {
  return function (y) {
    return x * y;
  };
}
let times5 = multiply(5);
console.log(times5(4));

(function () {
  console.log("IIFE executed");
})();
