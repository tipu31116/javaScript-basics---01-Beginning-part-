//function as variable reference
function Func(){
    console.log('Tipu Sultan');
}
Func();

//function as return value
const Func1=function(){

    console.log('Tipu Sultan');
}
Func1();


//function as input argument
function outerFunc(){
    return function innerFunc(){
        console.log('Inner Function Output');
    }
}
outerFunc()();



//Higher order function and callback function
function outerFunc1(innerFunc1){
    console.log(innerFunc1());
}
outerFunc1(function(){
    console.log('Inner function to be called');
});


//Example | Return a function
function sayHello() {
    return function() {
       console.log("Hello!");
    }
 }
sayHello()();



//A function that returns a function is called a Higher-Order Function.
const sayHello = function() {
    return function() {
       console.log("Hello!");
    }
 }
 const myFunc = sayHello();
 myFunc();


 // Store in a variable
var talk = speak;
talk('Hi');
console.log(talk);

const constFunction = () => console.log('Say,Hell;o');
console.log(constFunction());