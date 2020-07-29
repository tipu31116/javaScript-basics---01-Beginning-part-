// Some
//array helper method 
//1.work like regular looping
//2.work with array
//3.return true and false (Based on some condition)
//4.Don't mutatting (change) the orginal array

const arr=['My','Leptop','is','my','love'];
const showArr=arr.some(params=> {
    return typeof params ==='string'
})
console.log(showArr);