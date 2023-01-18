// for (var i = 0; i < 3; i++) {
//   function test(params) {
//     setTimeout(() => {
//       console.log(params);
//     }, 1000);
//   }
//   test(i);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

var a = 123;
if (true) {
  var a = 15;
  console.log(a);
}
console.log(a);
// using let
console.log("========================");
let b = 123;
if (true) {
  let b = 15;
  console.log(a);
}
console.log(b);
