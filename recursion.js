// function basicRecursion(max, current) {
//   if (current > max) return;
//   console.log(current);
//   basicRecursion(max, current + 1);
// }

// basicRecursion(10, 2);

// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return fib(n - 2) + fib(n - 1);
//   }
// }
// let a = fib(7);
// console.log(a);

// for (let i = 1; i < 10; i++) {
//   console.log(fib(i));
// }

// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// let a = factorial(10);
// console.log(a);

// function printNumber(n) {
//   if (n <= 50) {
//     console.log(n);
//     printNumber(n + 1);
//   }
// }

// console.log(printNumber(1));

// let arr = [];
// function printNumber(n) {
//   if (n <= 1) {
//     arr.push(n);
//   } else {
//     arr.push(n);
//     printNumber(n - 1);
//   }
// }

// printNumber(30);
// let arrr = arr.sort()
// console.log(arrr)
// for (i = 1; i <= 30; i++) {
//   console.log(arrr[i]);
// }

// function printSum(n) {
//   if (n < 2) {
//     return 1;
//   } else {
//     return n + printSum(n - 1);
//   }
// }

// console.log(printSum(4));

// function arrPrint(arr, start, end) {
//   if (start >= end) {
//     return;
//   } else {
//     console.log(arr[start]);
//     arrPrint(arr, start + 1, end);
//   }
// }

// console.log(arrPrint([1, 3, 4, 5], 0, 4));
