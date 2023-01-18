// import fs from "fs";
const fs = require("fs");

// try {
//     fs.unlinkSync("./add.js");

// } catch (e) {
//   console.log(e);
// } finally {
//   console.log("file deleted");
// }
// console.log("do the next task");

// const content = fs.readFileSync("./add.js", { encoding: "utf8" });
// console.log(content);

// fs.writeFile("./add.js", "console.log('kaisa hai, masst?')", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("ho gaya");
//   }
// });
// console.log("next");
// try {
//   fs.copyFile("./test.txt", "copied_file4.txt", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("file coppied");
//     }
//   });
// } catch (e) {
//   console.log(e);
// }

// console.log("done next");
const command = process.argv[2];

if (command === "fly") {
  console.log("flying");
}
