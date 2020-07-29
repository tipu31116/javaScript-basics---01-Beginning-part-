//filter and find 
//array helper method 
//1.work like regular looping
//2.work with array
//3.return a new array(Based on some condition)
//4.Don't mutatting (change) the orginal array



//first filter method
const arr=['I','Sultan','and','you'];
const arrShow=arr.filter(function(params) {
    if(params.length>2)
    return params;
})
console.log(arrShow);



//arrow method of filter 
const arr1=['I','Sultan','and','you'];
const arr1Show=arr1.filter(params1=> {
    return params1.length>2  && params1
    
})
console.log(arr1Show);


//ternary operator
const arr2=['I','Sultan','and','you'];
const arr2Show=arr2.filter(params1=>params1.length>3  && params1)
console.log(arr2Show);