// const Person = require("./person");

// const person1 = new Person("John", 30);

// person1.greeting();

// part 2

// const Logger = require("./logger");

// const logger = new Logger();

// logger.on("message", (data) => console.log("Called Listener: ", data));

// logger.log("hello world");

const http = require("http");
const path = require("path");
const fs = require("fs");
const { dirname } = require("path");

const server = http.createServer((req, res) => {
  //   if (req.url === "/api/users") {
  // fs.readFile(
  //   path.join(__dirname, "public", "index.html"),
  //   (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(content);
  //   }
  // );
  //     const users = [
  //       { name: "Bob Smith", age: 35 },
  //       { name: "John Doe", age: 32 },
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  console.log(req.url);

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //  Extension of the file

  let extname = path.extname(filePath);

  // initial content type

  let contentType = "text/html";

  // check the extension

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // read file

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      // success
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
