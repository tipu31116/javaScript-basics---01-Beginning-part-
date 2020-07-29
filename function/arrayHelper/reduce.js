import accumulator from 'accumulator';
// Reduce
//array helper method 
//1.work like regular looping
//2.work with array
//3.return reduce value (Based on some condition)
//4.Don't mutatting (change) the orginal array

const arr=['I','Love','Programming'];
const allArry=arr.reduce((accumulator,currentValue)=>{
    return `${accumulator}  ${currentValue}`;
})
console.log(allArry);

//exersie solution
// const arrSum=[1,2,3,4,5];
// const showSum=arrSum.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// },0);
// console.log(showSum);

// //
const arrayNumber = [1, 2, 3, 4, 5, -7, 8];

//a=0,c=1  a=>1
//a=1,c=2  a=>3
//a=3,c=3  a=>6
//a=6,c=4  a=>10
//a=10,c=5 a=>15
//a=15,c=-7 a=>8
//a=8,c=8  a=>16
const allSum = arrayNumber.reduce((accumuleter, currentValue) => {
    return accumuleter + currentValue;
}, 0);
console.log(allSum);