const a = 10;  //gobal scope
{
    let ju = 'jhsjkd';//block scope
}


function functionA() {
    const a = 80; //local scope

    console.log(a);
    const d = 9;
    console.log(d);
    return function functionB() {
        const a = 90
        const b = 5;
        const c = 6;
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
functionA()();
console.log(a);




//exersie
const arr = [1, 2, 3, 4, 5, 6, 7, 8,5,9,8,6,0];
function sumArray(arr) {
    let sum = 0;
    if(!Array.isArray(arr)) return `please provide of the array`
    for (let element of arr) {
        sum += element;
    }
    return sum;
}

console.log(sumArray(arr));
