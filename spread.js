const arr1=['I','Love','my','country'];
const arr2=['We','Love','our','family'];
const arr3=arr1.concat(arr2);
console.log(arr3);

const arr4=[...arr1 ,'and' ,...arr2];
console.log(arr4);




//another example of epread operator
const product={
    productName:'Rice',
    productPrice:45,
    productQuantity:12,
    productCostomer:12,
    ProductIsAvaible:true,
    productLon:'perfect',

};
const product2={
    ...product,
    keyValue:'value',
};
console.log(product2);



//another example
const familyNameBrother=['Tipu','Dipu','Apu'];
const familyNameSister=['Josna',...familyNameBrother];
console.log(familyNameSister);
const familyParents=['Father','Mother',...familyNameSister];
console.log(familyParents);
const familyNiece=['Big Niece: Jowena','Small Niece: Jabin',...familyParents];
console.log(familyNiece);
console.log(familyNiece.length);
console.log(familyNiece.unshift('others'));
console.log(familyNiece);




//another example
const department={

    departmentInstitute:'Comilla University',
    departmentName:'CSE',
    departmentBulding:1,
    departmentStudent:300,
    departmentTeacher:15,

};
const department2={
    ...department,
    departmentName:'ICT',
    departmentBulding:1,
    departmentStudent:250,
    departmentTeacher:10,
    departmentIsAvaible:true,
};
console.log(department2);

const department3={
    ...department2,
    versityTotalDepartment:19

};
console.log(department3);


//another example
let blog1Subscribers = ['billy@example.com', 'sally@gmail.com'];
let blog2Subscribers = ['timmy@gmail.com', 'tammy@example.com', 'tommy@gmail.com'];
let subscribers = [...blog1Subscribers, ...blog2Subscribers];
console.log(subscribers);




let arr6 = ['John', 'Sofia', 'Bob'];
let arr7 = [...arr6];
console.log(arr7);
arr6.unshift('Sally'); // Change arr1
console.log(arr6);




function dev(x, y, z) { }

var args = [0, 1, 2]

dev(...args) // call function
console.log(args);


//example
const rule={a:1,b:2,c:3};
const rule2={c:4,d:5,e:6};
const marge={...rule,...rule2};
console.log(marge);




unction doStuff (x, y, z) { }
var args1 = [0, 1, 2];

// Call the function, passing args
doStuff.apply(null, args1);
doStuff(...args1);
console.log(args1);


