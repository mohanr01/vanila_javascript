// array handling utility functions
let array = [1, 2, 3, 4];
// array.push(5); // add element to end
// console.log(array);
// array.pop(); // remove last element
// array.unshift(0); // add element to start
// console.log(array);
// array.shift(); // remove first element
// console.log(array);
// let index = array.indexOf(3); // find index of element
// console.log(index);
// let slicedArray = array.slice(1, 3); // slice array
// console.log(slicedArray);
// console.log(array);
// let splicedArray = array.splice(1, 2); // remove elements
// console.log(splicedArray);
// console.log(array);
// array.splice(1, 2, 9, 8); // remove and add elements
// console.log(array);
// let mappedArray = array.map((x) => x * 2); // map function
// console.log(mappedArray);
// // filter function
// let filteredArray = array.filter((x) => x > 2);
// console.log(filteredArray);
// array concatenation
// let array2 = [5, 6, 7];
// let concatenatedArray = array.concat(array2);
// console.log("concatenatedArray: " + concatenatedArray);
// let newArr = [].concat(array2);
// console.log("newArr: " + newArr);
// let arr = Array.from("hello");
// console.log("arr: " + arr);
// let filledArray = new Array(5).fill(0);
// console.log("filledArray: " + filledArray);
// let arr3 = [1,2,[22,334],[45,56,67]];
// let flatArray = arr3.flat();
// console.log("flatArray: " + flatArray);
let arr6 = [1, 2, 3, 4, 5];
console.log("arr6: " + arr6);
arr6.forEach((value, index) => {
    console.log("Index: " + index + ", Value: " + value);
});
let mappedArray = arr6.map((value,index) => {
    return {id: index+1, value: value * 2};
});
console.log("mappedArray: " + JSON.stringify(mappedArray));
strArr = ["apple", "banana", "cherry"];
let sortArray = strArr.map((x)=> {
    if(x.length % 2 === 0) {
        return x;
    } else {
        return -x;
    }
});
console.log("sortArray before sort: " + sortArray);
let reducedValue = arr6.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("reducedValue: " + reducedValue);
// index of an element
// let idx = arr6.indexOf(3);
// console.log("Index of 3: " + idx);
// console.log(arr6.includes(4)); // true
// console.log(arr6.findIndex((x) => x > 3)); // 3