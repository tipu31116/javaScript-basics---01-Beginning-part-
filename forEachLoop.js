const arr=['I','Love','Android & IOS'];
console.log(arr[0]);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log(arr);


//sting forloop 
const arrString='I Love Programming';
for(let i=0;i<arrString.length;i++){
    console.log(arrString[i]);
}
console.log(arrString);


//for each loop
const arrayValue=['This','is','my','leptop'];
// arrayValue.forEach(function(element,index,arrayValue){
//     console.log(index,element,arrayValue);
    

// });
arrayValue.forEach(function(value){
    console.log(value);
});
console.log(arrayValue);