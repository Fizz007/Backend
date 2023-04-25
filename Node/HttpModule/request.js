const http = require("http");

//get request to the server

http
  .request("http://localhost:8000/product", (res) => {
    res.setEncoding("utf-8");
    console.log("response recived");
    res.on("data", (mydata) => {
      console.log(mydata);
    });
  })
  .end();
