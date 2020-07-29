//IIFE=Immediately Invoked Function Expression

const name='Tipu'
console.log(name);//name is expression


//this is not a expression but it statement
const name2=function(){
    return `Tipu Sultan`;
}
console.log(name2());   


//this exampe is expression
const name3=(function() {//function expression
    return `Tipu`
})()
console.log(name3);