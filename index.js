// functions 
// currying functions
function add(a, b) {
  return function(c){
    return function(d){
      return a + b + c + d;
    }
  }
}
console.log(add(1, 2)(3)(4)); // 10

// self invoking functions
(function(){
  console.log("This is a self-invoking function!");
})();

// arrow functions
const multiply = (x, y) => x * y;
console.log(multiply(3, 4)); // 12  

// higher-order functions
function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}
function sum(x, y) {
    return x + y;
}
console.log(operateOnNumbers(5, 10, sum)); // 15

// closures
function makeCounter() {
  let count = 0;
    return function() {
        count++;
        return count;
    }
}
const counter = makeCounter();
console.log(counter());
// generators
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2