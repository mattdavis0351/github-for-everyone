const express = require("express");
const bodyParser = require("body-parser");

const addNumbers = require("./src/addNumbers");
// create express app and serve public folder
const app = express();
app.use(express.static("public"));
// use forms middleware

app.use(bodyParser.urlencoded({ extended: true }));

// root route to render index.html from publick folder
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// add route returns the sum of two numbers from a post request
app.post("/add", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const sum = addNumbers(num1, num2);
  if (sum.msg == "success") {
    res.send(`The sum of ${num1} and ${num2} is ${sum.value}`);
  } else {
    res.send("Invalid input");
  }
});

// listen on port 3000
app.listen(3000, function () {
  console.log("listening on port 3000");
});
