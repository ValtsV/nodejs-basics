const url = require("url");

const myUrl = new URL(
  "http://www.somewebsite.com/hello.html?id=100&status=active"
);

//  Serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)

console.log(myUrl.host);

// hostname / no port

console.log(myUrl.hostname);

// pathname

console.log(myUrl.pathname);

// serialized query

console.log(myUrl.search);

// search params

console.log(myUrl.searchParams);

// add parameter

myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//  loop through params

myUrl.searchParams.forEach((value, name) => {
  console.log(name, value);
});
