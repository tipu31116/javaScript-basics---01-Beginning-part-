//rest value is a array
function sum(number,...rastValue){   ///It's parameter
  return  rastValue.reduce((acc,curr)=>{
        return acc+curr;
    },number)
}
console.log(sum(1,2,3,4,5));  //value called arguments