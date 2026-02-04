let employees = [
    { name: "Alice", age: 28, department: "HR" },
    { name: "Bob", age: 34, department: "Engineering" },
    { name: "Charlie", age: 25, department: "Marketing" },
    { name: "David", age: 42, department: "Engineering" },
    { name: "Eve", age: 30, department: "HR" }
];
// Filter employees older than 30
let filteredEmployee = employees.filter(emp =>{
    if(emp.age > 30){
        return true;
    }
});
console.log("Filtered Employees (age > 30):", filteredEmployee);
// sort employees by age
let sortedEmp = employees.sort((a,b)=>{
    return a.age - b.age;
});
console.log("Sorted Employees by age:", sortedEmp);
// some and every
let hasYoungEmp = employees.some(emp => emp.age < 30);
console.log("Has employee younger than 30:", hasYoungEmp);
let allAbove20 = employees.every(emp => emp.age > 30);
console.log("All employees above 20:", allAbove20);
