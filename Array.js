//Array is a data structure that can hold a collection of values
//Arrays can contain a mix of different data types. Strings, booleans, numbers, objects
//Arrays are resizable. You don`t have to declare size of an array before creating
//Js arrays are zero-indexed and the insertion order is maintained
//Arrays are iterables. They can be used with a for of loop

const arr = [1,2,3, "John"]

console.log(arr([0]))

//To add an element to the end of the array we can use push method
arr.push(4);

//To iterate an array we can use for of loop
for(const item of arr){
    console.log(item)
};

//To add an element at the beginning of an array, use unshift method

arr.unshift(0)

//Use pop to remove an element from the end of an array and use shift method to remove from the beginning 
arr.pop()
arr.shift()