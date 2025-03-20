const http = require("http");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world to do list");
});

http
  .createServer(app)
  .listen(3001, () => console.log("Server running on port 3001"));
