function sum(num1,num2,num3){
   return num1+num2+num3;
    
}
console.log(sum(1,2,3));


//
function sum(){
    let total=0;

    //arguments are like array structure consists of values passed to the function
    console.log(arguments);
    for(let el of arguments){
        console.log(el)
        total+=el;

    }
    return total
     
 }
 console.log(sum(1,2,3));
 
 ////convertin arguments in real array
 function sum1(){
    
     console.log(arguments)
     const arrArguments=Array.from(arguments)
     const total=arrArguments.reduce((acc,curr)=>acc+curr)
        return total;

 }
 console.log(sum1(1,2,3,4));



 //another rule
 function sum1(){
    
    console.log(arguments)
    const arrArguments=[...arguments]
    const total1=arrArguments.reduce((acc,curr)=>acc+curr)
       return total1;

}
console.log(sum1(1,2,3,4));
