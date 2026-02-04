//spread operators
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2,7,8];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]
// object spread
let user = { name: "Bob", age: 25 };
let updatedUser = { ...user, age: 26, city: "New York" };
console.log(updatedUser); // { name: 'Bob', age: 26, city: 'New York' }

// rest operators
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

function printDetails(name, age, ...hobbies) {
    console.log("Name:", name, "Age:", age, "Hobbies:", hobbies);
}
printDetails("Alice", 30, "Reading", "Traveling", "Swimming");
// Name: Alice Age: 30 Hobbies: [ 'Reading', 'Traveling', 'Swimming' ]
// destructuring with rest
let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first, second, ...rest); // 10 20 30 40 50
let userInfo = { id: 1, username: "john_doe", email: "john@example.com" };
let { id, ...otherInfo } = userInfo;
console.log(id, otherInfo); // 1
// nested object destructuring 
let product = {
    id: 101,
    name: "Laptop",
    specs: {
        cpu: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD"
    }
};
let {id1, name1, specs: { cpu, ram, storage }} = product;
console.log(id1, name1, cpu, ram, storage); // 101 Laptop Intel i7 16GB 512GB SSD