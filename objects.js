//creation of objects
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
//person.greet(); // Hello, my name is Alice

// accessing object properties
//console.log(person.name); // Alice
//console.log(person.age); // 30
// creating object using constructor
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}  
let myCar = new Car("Toyota", "Corolla", 2020);
//console.log(myCar.make,myCar.model,myCar.year); // Toyota Corolla 2020
// adding methods to objects
Car.prototype.getInfo = function() {
    return this.year + " " + this.make + " " + this.model;
};
//console.log(myCar.getInfo()); // 2020 Toyota Corolla
// nested objects
let company = {
    name: "TechCorp",
    address: [{ 
        street: "123 Main St",
        city: "Metropolis",
        country: "Fictionland"
    },{
        street: "456 Side St",
        city: "Gotham",
        country: "Fictionland"
    }],
    getAddress: function() {
        return this.address[0].street + ", " + this.address[0].city + ", " + this.address[0].country;
    }
};
for (let key in person) {
    //console.log(key + ": " + person[key]);
}
let val = "";
for (let str of "this is a string") {
    val =  val + str;
}
let value = "this is a string";
for (let str in value) {
    console.log(value[str]);
}
console.log(val);
//console.log(company.getAddress());
for (let i = 0; i < company.address.length; i++) {
    //console.log(company.address[i].street + ", " + company.address[i].city + ", " + company.address[i].country);
}  
for (let addr of company.address) {
    //console.log(addr.street + ", " + addr.city + ", " + addr.country);
}   

let newObject = Object.assign(person, {occupation: "Engineer", country: "Wonderland"});
//console.log("newObject: " + JSON.stringify(newObject));
let keys = Object.keys(person);
//console.log("keys: " + keys);
let values = Object.values(person);
//console.log("values: " + values);
let entries = Object.entries(person);
//console.log("entries: " + JSON.stringify(entries));
// map function
let mappedEntries = entries.map(([key, value]) => {
    return [key.toUpperCase(), value];
});
console.log("mappedEntries: " + JSON.stringify(mappedEntries));
// map functions to object
let objFromEntries = Object.fromEntries(mappedEntries);
console.log("objFromEntries: " + JSON.stringify(objFromEntries));
// map function
let constObj = [{
    id: 1, name: "Item 1"
},{
    id: 2, name: "Item 2"
},{
    id: 3, name: "Item 3"
}
]
let mappedObj = constObj.map( x=> {
    return {identifier: x.id, itemName: x};
});
console.log("mappedObj: " + JSON.stringify(mappedObj));