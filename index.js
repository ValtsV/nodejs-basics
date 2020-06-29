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
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
