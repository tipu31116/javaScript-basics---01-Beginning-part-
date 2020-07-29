// find 
//array helper method 
//1.work like regular looping
//2.work with array
//3.return a first single value(Based on some condition)
//4.Don't mutatting (change) the orginal array

const arr=['I','Love','Programming'];
const showArray=arr.find(function(element) {
    
    if(element.length>2)
    {
        return element;
    }
})
console.log(showArray);

//arrow function
const arr1=['I','Love','Programming']
const showArray1=arr1.find(element1=>{
    return element1.length>3 && element1;
})
console.log(showArray1);

//ternary operator
const arr2=['I','Love','Programming']
const showFunction=arr2.find(element2=> element2.length>4 && element2);
console.log(showFunction);



//solution
const numberOfArray=['I','Love','Programming'];
const showNumber=numberOfArray.filter(function(el) {
    if(el.includes('mm')){
        return el;
    }
    else{
        return 'not a array'
    }

})
console.log(showNumber);
//different type solution
//arrow function solution
const arrbelow=['fjsfuifuj','hsdufiyfi','uifeiufhj','sdfjoif'];
const showBelow=arrbelow.filter(el2=>{
    return el2.includes('hj');

})
console.log(showBelow);

//another type of solution
//ternary operator

const arrTernaary=['I','Love','Programming']
const showT=arrTernaary.filter(ternary=>ternary.includes('ve'))
console.log(showT);