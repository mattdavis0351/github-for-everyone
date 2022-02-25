// function to parse req body and return the sum of two numbers
function addNumbers(num1, num2) {
  let sum = {};
  if (typeof num1 === "number" && typeof num2 === "number") {
    sum = { value: num1 + num2, msg: "success" };
  } else {
    sum = { msg: "invalid" };
  }
//   sum.value = num1 + num2;
//   sum.msg = "success";
  return sum;
}

// default export addNumbers
module.exports = addNumbers;
