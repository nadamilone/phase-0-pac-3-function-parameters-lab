const firstName1 = "Aki"
const firstName2 = "Samip"

function sayHelloTo(firstName1, firstName2) {
  if (firstName1 === "Aki") {
    return "Hello, " + firstName1 + "!";
  }else{
    return "Hello, " + firstName2 + "!";
  }
} if (firstName2 === "Samip") {
  return "Hello, " + firstName2 + "!";
}

sayHelloTo(firstName1);