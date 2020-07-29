const arr=['I','Love','my','family'];
console.log(arr.length);
console.log(arr[3]);
console.log(arr.includes('I'));
console.log(arr.includes('fhd'));
console.log(arr.indexOf('I'));
console.log(arr.slice(2));

//adding or remove element at the end of array
console.log(arr.push('!'));
console.log(arr);
console.log(arr.pop('!'));
console.log(arr);

//adding or remove element at the begging of the array

console.log(arr.unshift('We'));
console.log(arr);

console.log(arr.shift('We'));
console.log(arr);


//accessing specific part of the array
//slice are not change current array
//splice are change current array
console.log(arr.slice(0,2));
// console.log(arr.splice(0,3));
// console.log(arr);

//concat 
console.log(arr.concat('!'));
console.log(arr);


//empty
// arr.length=0;
// console.log(arr);


console.log(arr.splice(0,2,'I'));
console.log(arr);

const arr1=['We','Love','Country'];
console.log(arr1.slice(1));
const newArray=['I',...arr1.slice(1)];
console.log(newArray);