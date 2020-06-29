const fs = require("fs");
const path = require("path");

// create folder

// fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
//   if (err) throw err;
//   console.log("folder created");
// });

// create and write to file

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Content to put in",
//   function (error) {
//     if (error) throw error;
//     console.log("file created");

//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "Content to put in",
//       function (err) {
//         if (err) throw err;
//         console.log("file written to");
//       }
//     );
//   }
// );

// read file

// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", function (
//   err,
//   data
// ) {
//   if (err) throw err;
//   console.log(data);
// });

// rename file

fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  function (err) {
    if (err) throw err;
    console.log("file renamed");
  }
);
