//primitive type of value

const num1=10;
const num2=10;
console.log(num1===num2);

//object type or reference type of  obj(memory location comperar)
const obj1={a:10};
const obj2={b:10}
console.log(obj1 === obj2);  //object is comparer  is false

console.log(obj1.a===obj2.b);  //object is call by true


//object type or reference type or complex data type of array(memory location)

const arrNumber1=['tipu'];
const arrNumber2=['tipu'];
console.log(arrNumber1===arrNumber2);
console.log(arrNumber1[0]===arrNumber2[0]);